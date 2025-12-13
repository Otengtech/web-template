import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendMail } from "@/lib/mail";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save message to MongoDB
    await Contact.create({ name, email, message });

    // 1️⃣ Send message to ADMIN
    try {
      await sendMail({
        to: process.env.EMAIL_USER,
        subject: `📩 New Message from ${name}`,
        text: `
You received a new message from your website:

Name: ${name}
Email: ${email}

Message:
${message}
        `,
      });
    } catch (err) {
      console.error("Admin email failed:", err);
    }

    // 2️⃣ Send confirmation to USER
    try {
      await sendMail({
        to: email,
        subject: "Thanks for contacting Flip Music 🎵",
        text: `
Hey ${name},

Thanks for reaching out to Flip Music! 🎧
We’ve received your message and will get back to you soon.

Here’s a copy of your message:
"${message}"

– Flip Music Team
        `,
      });
    } catch (err) {
      console.error("User confirmation email failed:", err);
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
