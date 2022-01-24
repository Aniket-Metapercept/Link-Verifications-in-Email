const dotenv = require('dotenv').config()
var nodemailer = require('nodemailer');

const sendMail = (userEmail,otp)=> {
    
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MyMail,
            pass: process.env.Password
        }
    });
    
    
    var mailOptions = {
        from: process.env.MyMail,
        to: userEmail, 
        subject: 'Sending Email using Node.js',
        text: `You registeration was successfull ...!  You OTP is ${otp} `,
        html: `<p>Click <a href="${otp}">here</a> </p>`
    };
    
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response); 
        }
    });
}

module.exports = sendMail