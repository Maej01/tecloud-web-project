var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var config = require('../data/config.json');
var router = express.Router();

//body parser
var urlencodedPaser = bodyParser.urlencoded({ extended: false });

//get the index
router.get('/contact', (req, res, next) =>{
    
    //response
    res.render('contact', {
        pageTitle: "contact",
        pageID: "contact"
    });

});

router.post('/contact', urlencodedPaser, (req, res) => {
    console.log(req.body);
    // const output = `
    //                 <p>You have a new contact message</p>
    //                 <h3>Contact Details</h3>
    //                 <ul>
    //                     <li>name: ${req.body.name}</li>
    //                     <li>name: ${req.body.email}</li>
    //                     <li>name: ${req.body.phone_number}</li>
    //                     <li>name: ${req.body.subject}</li>
    //                 </ul>
    //                 <h3>name: ${req.body.message}</h3>
    //                 `;

    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     port: 25,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: config.email, // generated ethereal user
    //         pass: config.password // generated ethereal password
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // });

    // // setup email data with unicode symbols
    // let mailOptions = {
    //     from: '"Maej" <muhammad.m.sesay@tpisent.io>', // sender address
    //     to: 'maej_01@hotmail.com', // list of receivers
    //     subject: 'TeCloud Contact', // Subject line
    //     text: 'Yeah it works' // plain text body
    //     // html: output // html body
    // };

    // // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // });
    
    // res.redirect("/contact");
});


module.exports = router;