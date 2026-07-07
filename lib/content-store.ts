import { promises as fs } from "fs";
import path from "path";

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

async function ensureFileExists() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(OVERRIDES_FILE);
    } catch {
      await fs.writeFile(OVERRIDES_FILE, JSON.stringify(DEFAULT_DATA, null, 2), "utf8");
    }
  } catch (error) {
    console.error("Failed to ensure content-overrides file exists:", error);
  }
}

export async function readOverrides(): Promise<OverrideData> {
  await ensureFileExists();
  try {
    const content = await fs.readFile(OVERRIDES_FILE, "utf8");
    return JSON.parse(content) as OverrideData;
  } catch (error) {
    console.error("Error reading overrides file, returning defaults:", error);
    return DEFAULT_DATA;
  }
}

export async function writeOverrides(data: OverrideData): Promise<void> {
  await ensureFileExists();
  try {
    await fs.writeFile(OVERRIDES_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to write overrides file:", error);
    throw new Error("Failed to save content overrides");
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
