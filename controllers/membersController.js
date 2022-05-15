const { getAllMembers, createMember, updateMember, removeMember } = require('../services/membersService')

module.exports = {
  async getMembers (req, res, next) {
    try {
      const members = await getAllMembers()
      res.json({
        ok: true,
        members
      })
    } catch (error) {
      next(error)
    }
  },
  async addMember (req, res, next) {
    try {
      const { name, image } = req.body
      const member = await createMember(name, image)
      res.json({
        ok: true,
        member
      })
    } catch (error) {
      next(error)
    }
  },
  async updateMember (req, res, next) {
    try {
      const { id } = req.params
      const { name } = req.body
      await updateMember(id, name)
      res.json({
        ok: true,
        message: 'Member updated successfully!'
      })
    } catch (error) {
      next(error)
    }
  },
  async deleteMember (req, res, next) {
    const id = req.params.id
    try {
      await removeMember(id)
      res.status(200).send({ message: 'deleted', id })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
