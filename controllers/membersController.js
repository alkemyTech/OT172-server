const { getAllMembers, createMember } = require('../services/membersService')

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
      const { name } = req.body
      // TODO: replace null with a image
      const member = await createMember(name, null)
      res.json({
        ok: true,
        member
      })
    } catch (error) {
      next(error)
    }
  }
}
