const { Entries } = require('../models')
const entriesService = require('../services/entriesService')

const getAllNews = async (req, res, next) => {
  try {
    const newsList = await entriesService.getAllNews()
    res.status(200).json({ newsList })
  } catch (err) {
    next(err)
  }
}

const getNewById = async (req, res, next) => {
  try {
    const singleNew = await entriesService.findNew(req.params.id)
    if (singleNew === null) res.status(200).json({ ok: false })
    res.status(200).json(singleNew)
  } catch (err) {
    next(err)
  }
}

// This Method is used for update entries regardless of their type
const updateEntrie = async (req, res) => {
  const reqId = req.params.id
  try {
    const entry = await Entries.update(req.body, { where: { id: reqId } })
    res.status(200).send({ id: entry, message: 'updated' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteNew = async (req, res, next) => {
  const { id } = req.params
  try {
    await entriesService.deleteNew(id)
    res.status(200).send({ id, message: 'deleted' })
  } catch (err) {
    next(err)
  }
}

const createNew = async (req, res, next) => {
  try {
    const newToCreate = req.body
    console.log(newToCreate)
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
