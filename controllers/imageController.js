// const { postFile, getFile } = require('../services/amazonS3v2')
const { postFile, getFile } = require('../services/amazonS3v3')

module.exports = {
  async postImage (req, res) {
    if (!req.file) {
      return res.status(400).json({
        error: 'Ha habido un error. Por favor, envíe una imagen en la petición.'
      })
    }

    try {
      const image = await postFile(req.file)

      console.log(`Image uploaded: ${req.file.originalname}`)
      return res.status(201).json(image)
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  },
  async getImage (req, res) {
    if (!req.params.id) {
      return res.status(400).json({
        error: 'Por favor, provea el id del archivo'
      })
    }

    try {
      const image = await getFile(req.params.id)

      return res.status(200).json({ url: image.url })
    } catch (err) {
      if (err.message === 'NoSuchKey') {
        return res.status(404).json({ error: 'File not found' })
      } else {
        return res.status(500).json({ error: err.message })
      }
    }
  }
}
