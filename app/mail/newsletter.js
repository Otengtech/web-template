import Newsletter from "@/models/Newsletter.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addSubscriber(email) {
  // Validate email
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email address.");
  }

  // Save to MongoDB
  const existing = await Newsletter.findOne({ email });
  if (existing) {
    throw new Error("Email already subscribed.");
  }

  const subscriber = new Newsletter({ email });
  await subscriber.save();

  // Send confirmation email (non-blocking)
  try {
    await sendNewsletterEmail(email);
  } catch (err) {
    console.error("❌ Failed to send newsletter confirmation email:", err);
    // Continue without failing the request (DB save succeeded)
  }

  return subscriber;
}

async function sendNewsletterEmail(email) {
  await resend.emails.send({
    from: "Flip Music <onboarding@resend.dev>", // must match your verified sender
    to: email,
    subject: "Welcome to Flip Music Newsletter 🎶",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px; border-radius: 8px;">
        <h2 style="color:#16a34a;">Welcome to Flip Music!</h2>
        <p style="color:#333;">Thanks for subscribing to our newsletter. You’ll now get exclusive updates on new releases, events, and more!</p>
        <p style="margin-top: 16px;">Stay tuned,<br /><strong>The Flip Music Team 🎵</strong></p>
      </div>
    `,
  });
}
