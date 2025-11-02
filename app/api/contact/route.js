import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Save to MongoDB
    await Contact.create({ name, email, message });

    // 1️⃣ Send message to YOU (admin)
    await resend.emails.send({
      from: "Flip Music <onboarding@resend.dev>",
      to: process.env.EMAIL_USER, // ✅ your artist/admin email here
      subject: `New Message from ${name}`,
      text: `
You received a new message from your website:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // 2️⃣ Send confirmation to USER
    await resend.emails.send({
      from: "Flip Music <onboarding@resend.dev>",
      to: email, // ✅ user’s email
      subject: "Thanks for contacting Flip Music 🎵",
      text: `Hey ${name}, thanks for reaching out! We'll get back to you soon.

Here’s a copy of your message:
"${message}"

– Flip Music Team 🎧`,
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
