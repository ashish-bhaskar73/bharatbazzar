// const nodeMailer = require('nodemailer');
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});
// sgMail.setApiKey(process.env.MAILGUN_KEY);

const sendEmail = async (options) => {
  // const transporter = nodeMailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: process.env.SMTP_PORT,
  //     service: process.env.SMTP_SERVICE,
  //     auth: {
  //         user: process.env.SMTP_MAIL,
  //         pass: process.env.SMTP_PASSWORD,
  //     },
  // });

  // const mailOptions = {
  //     from: process.env.SMTP_MAIL,
  //     to: options.email,
  //     subject: options.subject,
  //     html: options.message,
  // };

  // await transporter.sendMail(mailOptions);

  const data = {
    from: process.env.MAILGUN_MAIL,
    to: options.email,
    template: options.templateId,
    "h:X-Mailgun-Variables": JSON.stringify(options.data), // If using templates
  };

  //   const msg = {
  //     to: options.email,
  //     from: process.env.MAILGUN_MAIL,
  //     templateId: options.templateId,
  //     dynamic_template_data: options.data,
  //   };
  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email Sent");
    }
  });
};

module.exports = sendEmail;
