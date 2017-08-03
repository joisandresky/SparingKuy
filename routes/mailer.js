const express = require('express');
const router = express.Router();


const mailer = require('../models/nodemailer');

router.post('/transporter', (req, res, next) => {

    let mailData = {
        receiver: req.body.receiver,
        subject: req.body.subject,
        text: req.body.text
    }
    // let mailData = {
    //     receiver: '123.xion@gmail.com',
    //     subject: 'Tesst',
    //     text: 'test'
    // }

    mailer.sendMail(mailData, (err, data) => {
        if(err){
            res.json({success: false, err: err, msg: 'Mengirim Email Gagal!', mailData: mailData})
        } else {
            res.json({success: true, msg: 'Email Terkirim!', data: data})
        }
    })
})

module.exports = router;