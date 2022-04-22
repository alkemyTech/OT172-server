const { Organizations } = require('../models')

const createOrganization = async (req, res) => {
  try {
    const { name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram } = req.body
    await Organizations.create({
      name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram
    })
    res.status(200).json({
      created: true,
      msg: 'Organization created successfully!'
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createOrganization
}
