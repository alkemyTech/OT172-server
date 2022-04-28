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
  const newFound = await Entries.findByPk(id)
  return newFound
}

module.exports = {
  getAllNews,
  findNew
}
