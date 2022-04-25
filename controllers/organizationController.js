const { postOrganization, putOrganization, findOrganization } = require('../services/organizationServices')

const getOrganization = async (req, res) => {
  const id = req.params.id
  try {
    const organization = await findOrganization(id)
    res.status(200).send(organization)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

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
  getOrganization,
  createOrganization,
  updateOrganization
}
