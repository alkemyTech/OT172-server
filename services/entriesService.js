const { Entries, Categories } = require('../models')

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
    },
    include: [{ model: Categories, as: 'category', attributes: ['id', 'name'] }]
  })
  if (!newFound) return null
  return newFound
}

const findNewByCategory = async id => {
  const newFound = await Entries.findOne({
    where: {
      categoryId: id
    }
  })
  return newFound
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
  findNewByCategory,
  createNew
}
