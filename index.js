const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'asha.aravind1995@gmail.com',
      pass: 'fmzwqpdmgxwvccqc',
    },
  });
  let mailOptions = {
    from: 'asha.aravind1995@gmail.com',
    to: 'asha.aravind1995@gmail.com', 
    subject: 'Hello!',
    text: 'Hi, this is an email sent using nodemailer!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });