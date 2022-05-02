const { Contacts } = require('../models')

module.exports = {
  async getAllContacts () {
    const contacts = await Contacts.findAll()
    return contacts
  },
  async findContact (id) {
    const contact = await Contacts.findByPk(id)
    return contact
  },
  async saveContact ({ name, email, phone = '', message = '' }) {
    const contact = await Contacts.create({ name, email, phone, message })
    return contact
  }
}
