const nodemailer = require('nodemailer');

async function SendEmail(to, subject,content,html){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,   
          pass: process.env.EMAIL_PASSWORD 
        }
      });
      
      return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: content,
        html: html,
      })
};

module.exports = {SendEmail};