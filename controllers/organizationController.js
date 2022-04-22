const { postOrganization, putOrganization } = require('../services/organizationServices')

const createOrganization = async (req, res) => {
  try {
    const { name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram } = req.body
    await postOrganization(name, imageUrl, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram)
    res.status(200).json({
      created: true,
      msg: 'Organization created successfully!'
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateOrganization = async (req, res) => {
  const id = req.params.id
  try {
    await putOrganization(id, req)
    res.status(200).send({ message: 'updated' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createOrganization,
  updateOrganization
}
