// const createError = require('http-errors')
const { getAllContacts } = require('../services/contactsService')

module.exports = {
  async getContacts (req, res, next) {
    try {
      const contacts = await getAllContacts()
      res.json({
        ok: true,
        contacts
      })
    } catch (error) {
      next(error)
    }
  }

}
