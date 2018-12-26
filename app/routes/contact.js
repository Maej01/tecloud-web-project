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
    // console.log(req.body);
    const outputData = `
                    <p>You have a new contact message</p>
                    <h3>Contact Details</h3>
                    <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>Email: ${req.body.email}</li>
                        <li>Phone: ${req.body.phone_number}</li>
                        <li>Subject: ${req.body.subject}</li>
                    </ul>
                    <h3>Message: ${req.body.message}</h3>
                    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: config.email, // generated ethereal user
            pass: config.password// generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Maej" <muhammadsesay8@gmail.com>', // sender address
        to: 'muhammad.m.sesay@tpisent.io, tecloudplatform@gmail.com', // list of receivers
        subject: 'TeCloud Contact', // Subject line
        // text: 'Yeah it works', // plain text body
        html: outputData // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    
    res.redirect("/contact"); //redirecting the user
});


module.exports = router;