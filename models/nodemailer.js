const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jois.andresky77@gmail.com',
        pass: 'jiujitsu7'
    }
    // auth: {
    //     xoauth2: xoauth2.createXOAuth2Generator({
    //         user: 'jois.andresky77@gmail.com',
    //         clientId: '94969619109-l8qkhd3r5h3tqj1g5r5ehhemn1cnlvq9.apps.googleusercontent.com',
    //         clientSecret: 'mMJ7Nz547-Eu2NPlofo47eXi',
    //         refreshToken: '1/8CpujtUCb1JBMo9sybC2y-wLMkvKPwkAAFSTkLwlTsw',
    //         accessToken: 'ya29.GlubBHWeqoTq9ryEgSNRzxxScucgj8CiWbsmQMDj20d2LvERDc-8wGXO6OBzE7xh26FBO8MGQtf_PUq_8Pa9DJ_w4cxie_duWzlSDO7JrF3drUqGV7REYV_3_QGv'
    //     })
    // }
})

module.exports.sendMail = function(data, callback){
    let mailOptions = {
        from: 'Jois@SparingKuy <jois.andresky77@gmail.com>',
        to: data.receiver,
        subject: data.subject,
        html: data.text
    }

    transporter.sendMail(mailOptions, callback);
}