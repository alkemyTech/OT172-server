const categoriesService = require('../services/categoriesService')

module.exports = {
  async create (req, res) {
    try {
      const { name, description } = req.body

      const category = await categoriesService.create(name, description)

      category[0]['_options'].isNewRecord
        ? (console.log(`Category ${name} successfully created`),
          res.json({ message: 'Successfully created' }))
        : (console.log(`${name} already exist`),
          res.status(500).json({ error: `Category ${name} already exist` }))
    } catch (error) {
      console.log(`Something wrong. Error [${error.message}]`)
      res.status(500).json({ error: error.message })
    }
  }
}
