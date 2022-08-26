const sgMail = require('@sendgrid/mail')

interface MailVariables {
  subject?: string;
}

class MailerService {

  async send(email: string, template: string, variables: MailVariables) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: email, // Change to your recipient
      from: 'ggsilva28SMTP@gmail.com', // Change to your verified sender
      subject: variables.subject || 'Sign What',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    try {
      const mail = await sgMail.send(msg)
      return mail
    } catch (error) {
      throw new Error(error)
    }

  }

}

export { MailerService };
