import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body;

    const userMail = process.env.MAIL_USER;
    const passMail = process.env.MAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // importante para puerto 465
      auth: {
        user: userMail,
        pass: passMail,
      },
    });

    await transporter.sendMail({
      from: '"Ecommerce change your own word" <no-reply@appmetrofem.com>',
      to: email,
      subject: name ? `welcome to our community, ${name}` : "welcome to our community",
      text:`Thanks ${name} for be part of this new word`,
      html: ':<b>Thanks for be part of this new word </b><img src="cid:logo@gmail.com alt="afiche"/>',
      attachments: [
        {
          filename: 'afiche.png',
          path: './public/afiche.png',
          cid: 'afiche',
          contentDisposition: 'inline',
        },
      ],
    });

    return new Response(JSON.stringify({ res: "Mensaje enviado" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ res: "Error enviando el mensaje" }), { status: 500 });
  }
}


