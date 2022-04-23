const { postActivity } = require('../services/activityService')
const { putActivity } = require('../services/activityService')

const createActivity = async (req, res) => {
  try {
    const { name, image, content } = req.body
    await postActivity(
      name,
      image,
      content
    )
    res.status(200).json({
      created: true,
      msg: 'Activity created successfully!'
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateActivity = async (req, res) => {
  const id = req.params.id
  try {
    await putActivity(id, req)
    res.status(200).send({ message: 'updated' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createActivity,
  updateActivity
}
