const nodemailer = require("nodemailer");

interface MailVariables {
  subject?: string;
}

class MailerService {
  async send(email: string, template: string, variables: MailVariables) {
    console.log("mailconfig");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log("mailoptions");

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: variables.subject || "Sign What?",
      text: "That was easy!",
    };
    try{
        const mail = await transporter.sendMail(mailOptions)
        return mail 

    }catch(error){
        return error
    }

  }
}

export { MailerService };
