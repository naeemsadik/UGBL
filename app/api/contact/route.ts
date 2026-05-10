import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

function wantsDocumentNavigation(request: Request): boolean {
  const accept = request.headers.get("accept") ?? "";
  const secFetchDest = request.headers.get("sec-fetch-dest") ?? "";
  return secFetchDest === "document" || accept.includes("text/html");
}

function contactRedirect(request: Request, submit: "success" | "error", requestId: string): NextResponse {
  const url = new URL("/contact", request.url);
  url.searchParams.set("submit", submit);
  url.searchParams.set("requestId", requestId);
  return NextResponse.redirect(url, { status: 303 });
}

async function getContactPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    return {
      name: String(body?.name ?? ""),
      email: String(body?.email ?? ""),
      company: String(body?.company ?? ""),
      message: String(body?.message ?? ""),
    };
  }

  const formData = await request.formData();
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
}

export async function POST(request: Request) {
  const requestId = `contact-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  try {
    const contentType = request.headers.get("content-type") ?? "unknown";
    console.info("[contact-api] request:start", {
      requestId,
      method: request.method,
      contentType,
    });

    const { name, email, company, message } = await getContactPayload(request);
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecure = process.env.SMTP_SECURE === "true";

    // Basic server-side validation
    if (!name || !email || !message) {
      console.warn("[contact-api] validation:missing-fields", {
        requestId,
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        hasMessage: Boolean(message),
      });
      if (wantsDocumentNavigation(request)) {
        return contactRedirect(request, "error", requestId);
      }
      return NextResponse.json(
        { error: "Missing required fields", requestId },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("[contact-api] validation:invalid-email", {
        requestId,
        email,
      });
      if (wantsDocumentNavigation(request)) {
        return contactRedirect(request, "error", requestId);
      }
      return NextResponse.json(
        { error: "Invalid email format", requestId },
        { status: 400 }
      );
    }

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("[contact-api] smtp:missing-config", {
        requestId,
        hasHost: Boolean(smtpHost),
        hasUser: Boolean(smtpUser),
        hasPass: Boolean(smtpPass),
      });
      if (wantsDocumentNavigation(request)) {
        return contactRedirect(request, "error", requestId);
      }
      return NextResponse.json(
        { error: "SMTP configuration is incomplete", requestId },
        { status: 500 }
      );
    }

    console.info("[contact-api] smtp:config", {
      requestId,
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      user: smtpUser,
    });

    // Nodemailer transporter configuration
    // Use environment variables for security
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
    await transporter.verify();
    console.info("[contact-api] smtp:verified", { requestId });

    // Email content
    const mailOptions = {
      // Many SMTP providers reject custom "from" identities; use the authenticated mailbox.
      from: smtpUser,
      replyTo: email,
      to: process.env.CONTACT_RECIPIENT_EMAIL || "info@rivertyneltd.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || "N/A"}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.info("[contact-api] send:success", {
      requestId,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    if (wantsDocumentNavigation(request)) {
      return contactRedirect(request, "success", requestId);
    }
    return NextResponse.json({ success: true, requestId });
  } catch (error) {
    console.error("[contact-api] send:error", {
      requestId,
      error,
    });
    if (wantsDocumentNavigation(request)) {
      return contactRedirect(request, "error", requestId);
    }
    return NextResponse.json(
      { error: "Failed to send message", requestId },
      { status: 500 }
    );
  }
}
