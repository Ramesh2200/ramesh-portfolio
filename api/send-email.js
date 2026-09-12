import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "ballariramesh0825@gmail.com",
        pass: (process.env.GMAIL_APP_PASS || "ipmbrxncocindajr").replace(/\s+/g, "")
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER || "ballariramesh0825@gmail.com"}>`,
      to: process.env.GMAIL_USER || "ballariramesh0825@gmail.com",
      replyTo: email,
      subject: `📬 Portfolio Message: ${subject || "New Inquiry"} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0284c7; margin-top: 0;">New Message from Portfolio Website</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #0284c7;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #64748b; margin-top: 25px;">Hit Reply in Gmail to respond directly to ${email}.</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, message: "Email sent directly to your Gmail!" });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
