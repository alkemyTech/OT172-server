const { postActivity, putActivity, findActivity, findActivities } = require('../services/activityService')

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
    await putActivity(id, req.body)
    res.status(200).send({ ...req.body, id })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getActivity = async (req, res) => {
  const id = req.params.id
  try {
    const activity = await findActivity(id)
    res.status(200).send(activity)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getActivities = async (req, res) => {
  try {
    const activities = await findActivities()
    res.status(200).send(activities)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getActivity,
  getActivities,
  createActivity,
  updateActivity
}
