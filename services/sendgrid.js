const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SEND_GRID)

module.exports = sgMail;