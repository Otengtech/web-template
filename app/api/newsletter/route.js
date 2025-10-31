import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
    }

    await Newsletter.create({ email });

    // Send confirmation email
    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: "Welcome to Flip Music Newsletter 🎵",
      text: `Thank you for subscribing to Flip Music! We'll keep you updated with the latest vibes.`,
    });

    return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
