const { builCategory } = require('../services/activityService')

module.exports = {
  async createActivity (req, res) {
    try {
      const create = builCategory(req.body)

      if (!create) {
        return res.status(402).json({
          ok: false,
          msg: 'Something got wrong while creating the activity.'
        })
      }

      res.status(200).json({
        ok: true,
        msg: 'Activity created successfully!'
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}
