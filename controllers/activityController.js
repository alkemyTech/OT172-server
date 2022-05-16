const { postActivity, putActivity, findActivity, findActivities, removeActivity } = require('../services/activityService')

const createActivity = async (req, res) => {
  try {
    const { name, image, content } = req.body
    await postActivity(
      {
        name,
        image,
        content
      }
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
  const { image, ...restActivity } = req.body
  try {
    if (image !== null) {
      restActivity.image = image
    }
    await putActivity(id, restActivity)
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

const deleteActivity = async (req, res) => {
  const id = req.params.id
  try {
    await removeActivity(id)
    res.status(200).send({ message: 'deleted', id })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  deleteActivity,
  getActivity,
  getActivities,
  createActivity,
  updateActivity
}
