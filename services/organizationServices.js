const { Organizations } = require('../models')
module.exports = {
  async postOrganization (name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram) {
    await Organizations.create({
      name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram
    })
  },
  async putOrganization (id, req) {
    await Organizations.update(req.body, { where: { id } })
  }
}