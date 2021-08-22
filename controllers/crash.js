const axios = require('axios');
const validator = require('validator');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

/**
 * GET /crash
 * Contact form page.
 */
exports.getCrash = (req, res) => {
    const unknownUser = !(req.user);

    res.render('crash', {
        title: 'Crash',
        sitekey: process.env.RECAPTCHA_SITE_KEY,
        unknownUser,
    });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postCrash = async (req, res) => {
    const validationErrors = [];
    let fromName;
    let fromEmail;
    if (!req.user) {
        if (validator.isEmpty(req.body.name)) validationErrors.push({ msg: 'Please enter your name' });
        if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });
    }
    if (validator.isEmpty(req.body.message)) validationErrors.push({ msg: 'Please enter your message.' });


    try {
        console.log("Hello")
    } catch (err) {
        console.log(err);
    }
};
