const { createTestimony, deleteTestimony, updateTestimony } = require('../services/testimonyService')

module.exports = {
  async postTestimony (req, res) {
    try {
      const { name, image, content } = req.body
      const testimony = await createTestimony(name, image, content)
      console.log(`Testimony created ${testimony._id}`)
      res.status(200).json({ ok: true, msg: 'Testimony created' })
    } catch (error) {
      console.log(`Something wrong. Error [${error.message}]`)
      res.status(500).json({ error: error.message })
    }
  },
  async deleteTestimony (req, res) {
    const id = req.params.id
    try {
      await deleteTestimony(id)
      res.status(200).send({ message: 'Testimony deleted' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async updateTestimony (req, res, next) {
    try {
      await updateTestimony(req.params.id, req.body)
      res.status(200).json({
        ok: true,
        msg: 'Testimony updated'
      })
    } catch (err) {
      next(err)
    }
  }
}
