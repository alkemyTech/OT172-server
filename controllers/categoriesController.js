const { createCategory, getCategories } = require('../services/categoriesService')

module.exports = {
  async create (req, res) {
    try {
      const { name, description } = req.body

      const category = await createCategory(name, description)

      if (category[0]._options.isNewRecord) {
        console.log(`Category ${name} successfully created`)
        res.json({ ok: true, msg: 'Category successfully created' })
      } else {
        console.log(`${name} already exist`)
        res
          .status(400)
          .json({ ok: false, msg: `Category ${name} already exist` })
      }
    } catch (error) {
      console.log(`Something wrong. Error [${error.message}]`)
      res.status(500).json({ error: error.message })
    }
  },
  async getCategories (req, res) {
    try {
      const categories = await getCategories()
      const nameCategories = categories.map(c => c.name)
      res.status(200).json({ nameCategories })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
