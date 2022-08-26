const sgMail = require('@sendgrid/mail')

interface MailVariables {
  subject?: string;
}

class MailerService {

  async send(email: string, template: string, variables: MailVariables | any) {

    try {
      const { Template } = await import(`../templates/emails/${template}`)
      const templateClass: { getTemplate: any } = new Template();

      for (let key in variables) {
        if (templateClass[key] !== undefined) {
          templateClass[key] = variables[key]
        }
      }

      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const msg = {
        to: email,
        from: 'ggsilva28SMTP@gmail.com', // Change to your verified sender
        subject: variables.subject || 'Sign What',
        html: templateClass.getTemplate(),
      }

      try {
        const mail = await sgMail.send(msg)
        return mail
      } catch (error) {
        throw new Error(error)
      }

    } catch (error) {
      console.log(error)
      throw new Error('Template not found')
    }

  }

}

export { MailerService };
