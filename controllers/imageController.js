const { postFile, getFile } = require('../services/amazonS3')

module.exports = {
  async postImage (req, res) {
    // Habilitar y probar al enviar archivos
    if (!req.file) {
      return res.status(400).json({
        error: 'Ha habido un error. Por favor, envíe una imagen en la petición.'
      })
    }
    const fileName = req.file.name
    try {
      const image = await postFile(fileName)

      console.log(`Image uploaded: ${fileName}`)
      return res.status(201).json(image)
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  },
  async getImage (req, res) {
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
