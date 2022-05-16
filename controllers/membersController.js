const { getAllMembers, createMember, putMember, removeMember, findMember } = require('../services/membersService')

module.exports = {
  async getMembers (req, res, next) {
    try {
      const members = await getAllMembers()
      res.json(members)
    } catch (error) {
      next(error)
    }
  },
  async addMember (req, res, next) {
    try {
      const { name, image, description } = req.body
      const member = await createMember({ name, image, description })
      res.json({
        ok: true,
        member
      })
    } catch (error) {
      next(error)
    }
  },
  async updateMember (req, res, next) {
    const id = req.params.id
    const { image, ...restMemmber } = req.body
    try {
      if (image !== null) {
        restMemmber.image = image
      }
      await putMember(id, restMemmber)
      res.status(200).send({ ...req.body, id })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async getMember (req, res, next) {
    const id = req.params.id
    try {
      const member = await findMember(id)
      res.status(200).send(member)
    } catch (error) {
      res.status(500).json({ error: error.message })
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
