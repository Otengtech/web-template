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
        text: "Thanks for subscribing to Flip Music Newsletter, you will receive all update from us quickly.",
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