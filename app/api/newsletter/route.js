import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
    }

    // Save new subscriber
    await Newsletter.create({ email });

    // === 1️⃣ Send welcome email to subscriber ===
    try {
      await resend.emails.send({
        from: "Flip Music <onboarding@resend.dev>", // your verified sender
        to: email,
        subject: "Welcome to Flip Music Newsletter 🎵",
        text: `Hey there! 🎶\n\nThanks for subscribing to Flip Music — you'll now get exclusive updates, new tracks, and behind-the-scenes content straight to your inbox.\n\nStay tuned,\nFlip Music Team`,
      });
    } catch (mailError) {
      console.error("Subscriber welcome email failed:", mailError);
    }

    // === 2️⃣ Send notification email to you (the admin) ===
    try {
      await resend.emails.send({
        from: "Flip Music <onboarding@resend.dev>",
        to: process.env.EMAIL_USER, // <== add this in your Render env vars
        subject: "🎉 New Newsletter Subscriber!",
        text: `A new user has joined your Flip Music newsletter list.\n\nSubscriber email: ${email}\n\nCheck your dashboard for details.`,
      });
    } catch (adminMailError) {
      console.error("Admin notification email failed:", adminMailError);
    }

    return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
