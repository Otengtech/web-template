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
    // await Newsletter.create({ email });


    // 1️⃣ Welcome email for user
    try {
      await sendMail({
        from: `"Flip Music Team" <${process.env.EMAIL_USER}>`,
        to: email,
        replyTo: process.env.EMAIL_USER, // Replies go to admin
        subject: "Thanks for subscribing!",
        text: `Welcome! You are subscribed.`,
        messageId: `<${Date.now()}@westboyflip.com>`,
      });
    } catch (err) {
      console.error("Welcome email failed:", err);
    }

    // 2️⃣ Admin notification
    try {
      await sendMail({
        from: `"Website Notifications" <${process.env.EMAIL_USER}>`,
        to: "otengebenezer326@gmail.com",
        subject: `📩 New subscription from ${email}`,
        text: `New subscriber: ${email}`,
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
