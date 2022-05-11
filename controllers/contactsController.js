// const createError = require('http-errors')
const { getAllContacts, saveContact } = require('../services/contactsService')

module.exports = {
  async getContacts (req, res, next) {
    try {
      const contacts = await getAllContacts()
      res.json(contacts)
    } catch (error) {
      next(error)
    }
  },
  async addContact (req, res, next) {
    try {
      const { name, email, phone } = req.body
      const newContact = await saveContact({ name, email, phone })
      res.json({
        ok: true,
        newContact
      })
    } catch (error) {
      next(error)
    }
  }
}
