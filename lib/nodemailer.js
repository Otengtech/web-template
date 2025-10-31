import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // You can use any service (Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
export const mailOptions = {
  from: process.env.EMAIL_USER,
};
