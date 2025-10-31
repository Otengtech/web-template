import Newsletter from "@/models/Newsletter.js";
import nodemailer from "nodemailer";

export async function addSubscriber(email) {
  // Save email to MongoDB
  const existing = await Newsletter.findOne({ email });
  if (existing) {
    throw new Error("Email already subscribed.");
  }

  const subscriber = new Newsletter({ email });
  await subscriber.save();

  // Send confirmation email
  await sendNewsletterEmail(email);

  return subscriber;
}

async function sendNewsletterEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Flip Music" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Flip Music Newsletter 🎶",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Welcome to Flip Music!</h2>
        <p>Thanks for subscribing to our newsletter. You’ll now get exclusive updates on new releases, events, and more!</p>
        <br />
        <p>Stay tuned,<br /><strong>The Flip Music Team</strong></p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
