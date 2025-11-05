import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body;

    const userMail = process.env.MAIL_USER;
    const passMail = process.env.MAIL_PASS;
    const hostMail = process.env.MAIL_HOST;
    const portMail = process.env.MAIL_PORT;
    const secureMail = process.env.MAIL_SECURE;

    const transporter = nodemailer.createTransport({
      host: hostMail || 'smtp.gmail.com',
      port: portMail || 465,
      secure: secureMail || true, // importante para puerto 465
      auth: {
        user: userMail,
        pass: passMail,
      },
    } as SMTPTransport.Options);

    await transporter.sendMail({
      from: '"Ecommerce change your own word" <no-reply@appmetrofem.com>',
      to: email,
      subject: name ? `welcome to our community, ${name}` : "welcome to our community",
      text:`Thanks ${name} for be part of this new word`,
      html: ':<b>Thanks for be part of this new word </b><img src="https://ecommerce-nine-rouge-40.vercel.app/afiche.png" alt="afiche"/>',
    });

    return new Response(JSON.stringify({ res: "Mensaje enviado" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ res: "Error enviando el mensaje" }), { status: 500 });
  }
}


