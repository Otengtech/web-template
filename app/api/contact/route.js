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


    // Admin notification
    await sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,  // Admin inbox
      subject: `📩 New Message from ${name}`,
      text: `You received a new message:
      Name: ${name}
      Email: ${email}
      Message:
      ${message}`,
          });


    // 2️⃣ Send confirmation to USER
    await sendMail({
      from: `"Flip Music Team" <${process.env.EMAIL_USER}>`,
      to: email,  // User inbox
      replyTo: process.env.EMAIL_USER, // replies go to admin
      subject: "Thanks for contacting Flip Music 🎵",
      text: `Hey ${name},
      Thanks for reaching out! We'll get back to you soon.
      Here’s a copy of your message:
      "${message}"
      – Flip Music Team`,
          });

          
    // Message logging
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
