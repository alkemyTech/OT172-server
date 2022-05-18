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
    const { name, image, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram } = req.body
    await postOrganization(name, image, phone, adress, welcomeText, urlFacebook, urlLinkedin, urlInstagram)
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
  const {image, ...restActivity}=req.body
  try {
    if (image !== null) {
      restActivity.image = image
    }

   /* const dataAdapted= { //This is because inconsistences with the names of images
      name: restActivity.name,
      imageUrl: restActivity.image
    }*/

    await putOrganization(id, restActivity)
    res.status(200).send({ ...req.body, id })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getOrganization,
  createOrganization,
  updateOrganization
}
