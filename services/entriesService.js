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

module.exports = {
  getAllNews
}
