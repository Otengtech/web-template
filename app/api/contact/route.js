import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await Contact.create({ name, email, message });

    // // Send email notification to admin
    // await transporter.sendMail({
    //   ...mailOptions,
    //   to: process.env.EMAIL_USER,
    //   subject: `New Contact Message from ${name}`,
    //   text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
