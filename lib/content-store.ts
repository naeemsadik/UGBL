import { promises as fs } from "fs";
import path from "path";
import { MongoClient } from "mongodb";

const DATA_DIR = path.join(process.cwd(), "data");
const OVERRIDES_FILE = path.join(DATA_DIR, "content-overrides.json");

export type OverrideData = {
  EN: Record<string, string>;
  BN: Record<string, string>;
};

const DEFAULT_DATA: OverrideData = {
  EN: {},
  BN: {},
};

// MongoDB Setup
const uri = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };
  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
}

async function ensureLocalFileExists() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(OVERRIDES_FILE);
    } catch {
      await fs.writeFile(OVERRIDES_FILE, JSON.stringify(DEFAULT_DATA, null, 2), "utf8");
    }
  } catch (error) {
    console.error("Failed to ensure local content-overrides file exists:", error);
  }
}

export async function readOverrides(): Promise<OverrideData> {
  // If MongoDB is configured, read from DB
  if (clientPromise) {
    try {
      const dbClient = await clientPromise;
      const db = dbClient.db();
      const doc = await db.collection("content_overrides").findOne({ _id: "overrides" as any });
      if (!doc) {
        return DEFAULT_DATA;
      }
      return {
        EN: doc.EN || {},
        BN: doc.BN || {},
      };
    } catch (error) {
      console.error("Error reading overrides from MongoDB, falling back to local file:", error);
    }
  }

  // Fallback to local file persistence
  await ensureLocalFileExists();
  try {
    const content = await fs.readFile(RIDES_FILE_OR_LOCAL_PATH(), "utf8");
    return JSON.parse(content) as OverrideData;
  } catch (error) {
    // If running in Vercel/Serverless and local read fails, return defaults
    return DEFAULT_DATA;
  }
}

function RIDES_FILE_OR_LOCAL_PATH() {
  return OVERRIDES_FILE;
}

export async function writeOverrides(data: OverrideData): Promise<void> {
  // If MongoDB is configured, save to database
  if (clientPromise) {
    try {
      const dbClient = await clientPromise;
      const db = dbClient.db();
      await db.collection("content_overrides").updateOne(
        { _id: "overrides" as any },
        { $set: { EN: data.EN, BN: data.BN } },
        { upsert: true }
      );
      return;
    } catch (error) {
      console.error("Error saving overrides to MongoDB:", error);
      throw new Error("Database error saving overrides. Please check your MongoDB configuration.");
    }
  }

  // Fallback to local file persistence
  await ensureLocalFileExists();
  try {
    await fs.writeFile(OVERRIDES_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to write local overrides file:", error);
    throw new Error("Failed to save content overrides. Server filesystem is read-only (please configure MONGODB_URI in environment variables).");
  }
}

export async function getOverridesForLocale(locale: "EN" | "BN"): Promise<Record<string, string>> {
  const data = await readOverrides();
  return data[locale] || {};
}

export async function updateOverrides(
  locale: "EN" | "BN",
  newOverrides: Record<string, string>
): Promise<void> {
  const data = await readOverrides();
  data[locale] = {
    ...(data[locale] || {}),
    ...newOverrides,
  };
  await writeOverrides(data);
}

export async function resetOverrideKeys(locale: "EN" | "BN", keys: string[]): Promise<void> {
  const data = await readOverrides();
  if (data[locale]) {
    for (const key of keys) {
      delete data[locale][key];
    }
    await writeOverrides(data);
  }
}
