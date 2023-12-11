const nodemailer = require("nodemailer");
const sendToken = require("../utils/jwtToken");
const sendEmail = async (options) => {

    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.appPassword,
        },

    });

    const mailOption = {
        from: "sciencepathshala360@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    await transporter.sendMail(mailOption);

}

module.exports = sendEmail;