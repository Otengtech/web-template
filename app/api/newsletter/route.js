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

    // Save new subscriber
    await Newsletter.create({ email });

    // === 1️⃣ Send Welcome Email to Subscriber ===
    try {
      await resend.emails.send({
        from: "Flip Music <onboarding@resend.dev>", // must be verified in Resend
        to: email,
        subject: "🎵 Welcome to Flip Music Newsletter!",
        text: `
Hey there! 👋

Thanks for subscribing to the Flip Music newsletter.

You’ll now receive updates on:
- New releases 🎧
- Exclusive behind-the-scenes content 🎬
- Upcoming shows & collaborations 🎤

Stay tuned and keep vibing with us!

– Flip Music Team
        `,
      });
    } catch (welcomeError) {
      console.error("Failed to send welcome email:", welcomeError);
    }

    // === 2️⃣ Send Admin Notification Email ===
    try {
      await resend.emails.send({
        from: "Flip Music <onboarding@resend.dev>",
        to: process.env.EMAIL_USER, // ✅ your admin email (e.g. flipmusic@gmail.com)
        subject: "📩 New Newsletter Subscription",
        text: `
Hey Flip Music Admin,

A new user has subscribed to your newsletter!

📧 Subscriber Email: ${email}

Time: ${new Date().toLocaleString()}

You can check your MongoDB dashboard for the new entry.
        `,
      });
    } catch (adminError) {
      console.error("Failed to send admin notification email:", adminError);
    }

    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
