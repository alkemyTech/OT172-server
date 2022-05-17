const { Entries } = require('../models')
const entriesService = require('../services/entriesService')

const getAllNews = async (req, res, next) => {
  try {
    const pagination=req.query
    const newsList = await entriesService.getAllNews(pagination)
    res.status(200).json(newsList)
  } catch (err) {
    res.status(500).json({ error: error.message })
  }
}

const getNewById = async (req, res, next) => {
  try {
    const singleNew = await entriesService.findNew(req.params.id)
    if (singleNew === null) return res.status(200).json({ ok: false })
    const { category, ...singleNewFormated } = singleNew.dataValues
    singleNewFormated.categoryName = category.name
    return res.status(200).json(singleNewFormated)
  } catch (err) {
    next(err)
  }
}

// This Method is used for update entries regardless of their type
const updateEntrie = async (req, res) => {
  const reqId = req.params.id
  const {image, ...restNew}= req.body
  try {
    if(image!=null){
      restNew.image= image;
    }
    const entry = entriesService.updateNew(reqId, restNew)
    res.status(200).send({ id: entry, message: 'updated' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteNew = async (req, res, next) => {
  const { id } = req.params
  try {
    await entriesService.deleteNew(id)
    res.status(200).send({ id, message: 'deleted', id })
  } catch (err) {
    res.status(500).json({ error: error.message })
  }
}

const createNew = async (req, res, next) => {
  try {
    const newToCreate = req.body
    await entriesService.createNew(newToCreate)
    res.status(201).json({ message: 'created' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  updateEntrie,
  getAllNews,
  getNewById,
  deleteNew,
  createNew
}
