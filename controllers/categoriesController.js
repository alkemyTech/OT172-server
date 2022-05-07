const { createCategory, getCategories, findCategory, putCategories, removeCategory } = require('../services/categoriesService')

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
      const nameCategories = categories.map(c => { return { name: c.name, id: c.id } })
      res.status(200).json(nameCategories)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async getCategory (req, res) {
    const id = req.params.id
    try {
      const category = await findCategory(id)
      res.status(200).json(category)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async putCategory (req, res) {
    const id = req.params.id
    try {
      await putCategories(id, req)
      res.status(200).send({ message: 'updated' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async deleteCategory (req, res) {
    const id = req.params.id
    try {
      // Check if category is relacionate.
      await removeCategory(id)
      res.status(200).send({ message: 'deleted' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
