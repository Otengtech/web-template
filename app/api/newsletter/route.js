import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { sendMail } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "You are already subscribed!" },
        { status: 200 }
      );
    }

    // Save subscriber
    await Newsletter.create({ email });


    // 1️⃣ Welcome email
    try {
      await sendMail({
        to: email,
        subject: "🎵 Welcome to Flip Music Newsletter!",
        text: `
        Hey there 👋
        Thanks for subscribing to the Flip Music newsletter!
        You’ll get:
        - New music releases 🎧
        - Behind-the-scenes content 🎬
        - Upcoming shows 🎤
        Stay vibing!
        – Flip Music Team
        `,
      });
    } catch (err) {
      console.error("Welcome email failed:", err);
    }

    // 2️⃣ Admin notification
    try {
      await sendMail({
        to: process.env.EMAIL_USER,
        subject: "📩 New Newsletter Subscription",
        text: `
        New subscriber alert 🚀
        Email: ${email}
        Time: ${new Date().toLocaleString()}
        `,
      });
    } catch (err) {
      console.error("Admin email failed:", err);
    }

    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
