const { Entries } = require('../models')
const { findCategory } = require('./categoriesService')

const getAllNews = async () => {
  const newsList = await Entries.findAll({
    where: {
      type: 'news'
    },
    attributes: [
      'id',
      'name',
      'image',
      'createdAt'
    ]
  })
  console.log(newsList)
  return newsList
}

const findNew = async id => {
  const newFound = await Entries.findOne({
    where: {
      id,
      type: 'news'
    }
  })

  const categoryFounded = await findCategory(newFound.categoryId)
  return { ...newFound.dataValues, categoryName: categoryFounded.name }
}

const deleteNew = async (id) => {
  await Entries.destroy({ where: { id } })
}

const createNew = async (newToCreate) => {
  await Entries.create({
    ...newToCreate,
    type: 'news'
  })
}

module.exports = {
  getAllNews,
  deleteNew,
  findNew,
  createNew
}
