import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
// dev
// if (!SENDGRID_API_KEY) {
//   throw new Error("Missing SENDGRID_API_KEY in environment variables");
// }

// dev
// sgMail.setApiKey(SENDGRID_API_KEY);

export async function emailSignups(email) {
  const msg = {
    to: email,
    from: "mail@barkerapp.com",
    subject: "Welcome to Barker Social Media!",
    text: `Hi!

Thank you for signing up to Barker Social Media.

We’re excited to have you on board.

Best regards,
The Barker Team`,
    html: `
      <h1>Welcome to Barker Social Media!</h1>
      <p>Thank you for signing up to Barker Social Media.</p>
      <p>We’re excited to have you on board.</p>
      <p>Best regards,<br>The Barker Team</p>
    `,
  };

  // dev
  return "Welcome email sent successfully";

  // prod
  // try {
  //   await sgMail.send(msg);
  //   return "Welcome email sent successfully";
  // } catch (error) {
  //   console.error("Failed to send welcome email:", error);
  //   throw new Error("Failed to send welcome email");
  // }
}
