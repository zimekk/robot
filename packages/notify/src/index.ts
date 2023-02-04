import { createTransport } from "nodemailer";

export async function notify(id: string | number, data: { url: string }) {
  const subject = `Robot Notification - completed JobId ${id}`;
  const text = `Url: ${data.url}`;

  const transporter = createTransport(process.env.SMTP_URL, {
    from: process.env.MAIL_FROM,
  });

  const info = await transporter.sendMail({
    to: process.env.MAIL_TO,
    subject,
    text,
  });
  console.log(info);

  // only needed when using pooled connections
  transporter.close();
}
