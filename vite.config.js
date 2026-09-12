import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import nodemailer from 'nodemailer'

const emailPlugin = () => ({
  name: 'email-sender-api',
  configureServer(server) {
    server.middlewares.use('/api/send-email', (req, res, next) => {
      if (req.method !== 'POST') return next();

      let body = '';
      req.on('data', chunk => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const data = JSON.parse(body);
          const { name, email, subject, message } = data;

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ballariramesh0825@gmail.com',
              pass: 'ipmbrxncocindajr'
            }
          });

          await transporter.sendMail({
            from: `"Portfolio Contact Form" <ballariramesh0825@gmail.com>`,
            to: 'ballariramesh0825@gmail.com',
            replyTo: email,
            subject: `📬 Portfolio Message: ${subject || 'New Inquiry'} from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <h2 style="color: #0284c7; margin-top: 0;">New Message from Portfolio Website</h2>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #0284c7;">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                <p style="font-size: 12px; color: #64748b; margin-top: 25px;">Hit Reply in Gmail to respond directly to ${email}.</p>
              </div>
            `
          });

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, message: 'Email sent directly to Gmail!' }));
        } catch (err) {
          console.error('Error sending mail:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), emailPlugin()],
})
