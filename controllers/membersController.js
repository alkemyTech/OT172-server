const { getAllMembers } = require('../services/membersService')

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
  }
}
