const { Entries } = require('../models')

const getAllNews = async () => {
  const newsList = await Entries.findAll({
    where: {
      type: 'news'
    },
    attributes: [
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
  return newFound
}
const deleteNew = async (id) => {
  await Entries.destroy({ where: { id } })
}

module.exports = {
  getAllNews,
  deleteNew,
  findNew
}
