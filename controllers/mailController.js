const sgMail = require('../services/sendgrid')

const postMail = async (req, res) => {
    const {to, subject, text, html} = req.body

    const msg = {
        to,
        from: 'n9746ab@gmail.com',
        subject,
        text,
        html
    }
    console.log(msg)
    try {
        await sgMail.send(msg)
        res.status(201).send({success: true})
    } catch (error) {
        return res.status(401).send(error.message)
    }
}

  module.exports = {
    postMail,
  }