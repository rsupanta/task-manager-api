const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: '"Task Manager 👻" <noreply>',
    to: email,
    subject: "[Task Manager] Account Sign Up Successful! <noreply>",
    html: `<h1>Welcome to Task Manager!</h1>
      <p><strong>Hey ${name}, Your account has been created successfully!</strong></p>
      <p><strong>Feel free to contact us with any query regarding our App!</strong></p>
      <p><strong>Thank you for using our App!👊</strong></p>`,
  });
};

const sendAccountDeleteEmail = async (email, name) => {
  await transporter.sendMail({
    from: '"Task Manager 👻" <noreply>',
    to: email,
    subject: "[Task Manager] Account Deleted Successfully! ",
    html: `<h1>Your Account Deleted Successfully!</h1>
      <p><strong>Hey ${name}, We are sorry that you have to close your account.</strong></p>
      <p><strong>Is there anything we can do to improve our service?</strong></p>
      <p><strong>Please let us know.</strong></p>
      <p><strong>We hope to see you soon!</strong></p>
      <p><strong>Thank you!❤️</strong></p>`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendAccountDeleteEmail,
};
