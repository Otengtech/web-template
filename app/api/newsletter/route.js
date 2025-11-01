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

    // Send welcome email (optional)
    try {
      await resend.emails.send({
        from: "Flip Music <onboarding@resend.dev>", // your verified sender
        to: email,
        subject: "Welcome to Flip Music Newsletter 🎵",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 16px; background: #f9f9f9;">
            <h2 style="color:#1a1a1a;">Welcome to <span style="color:#ff0066;">Flip Music</span> 🎧</h2>
            <p>Hey there,</p>
            <p>Thanks for subscribing to <strong>Flip Music</strong>! We'll keep you updated with the latest tracks, artists, and musical vibes.</p>
            <p style="margin-top: 24px;">Stay tuned,</p>
            <p><strong>The Flip Music Team</strong></p>
          </div>
        `,
      });
    } catch (mailError) {
      console.error("Newsletter email send failed:", mailError);
      // Don’t throw — DB already saved successfully
    }

    return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
