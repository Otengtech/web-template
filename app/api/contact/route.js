import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save message to MongoDB
    await Contact.create({ name, email, message });

    // Send email notification (optional)
    try {
      await resend.emails.send({
        from: "Flip Music <onboarding@resend.dev>", // Resend's verified sender
        to: process.env.EMAIL_USER, // your admin email
        subject: `New Contact Message from ${name}`,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      });
    } catch (mailError) {
      console.error("Email sending failed:", mailError);
      // Don’t throw — we still want the API to return success if DB worked
    }

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
