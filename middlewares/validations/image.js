const { postFile, getFile } = require('../../services/amazonS3')
const fs = require('fs-extra')

const hasImage = async (req, res, next) => {
  try {
    let image = req.body.image || null
    if (req.files?.image) {
      const result = await postFile(req.files.image.tempFilePath)
      const urlImage = await getFile(result.keyId)
      await fs.remove(req.files.image.tempFilePath)
      image = urlImage.url
    }
    req.body.image = image
    next()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

  // const result = createActivityValidation.validate(req.body)
  // if (!result.error) {
  //   next()
  // } else {
  //   console.log(`Activity have errors: [${result.error.message}]`)
  //   res.status(422).json(result.error.message)
  // }
}
module.exports = { hasImage }
