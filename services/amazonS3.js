require('dotenv').config()

// Import required AWS SDK clients and commands for Node.js.
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')

const path = require('path')
const fs = require('fs')

// configurar AWS con las claves de acceso
const region = process.env.AWS_S3_REGION
const bucketName = process.env.AWS_S3_BUCKET_NAME

const s3Config = {
  region,
  credentials: {
    accessKeyId: process.env.AWS_S3_PUBLIC_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY
  }
}

const s3Client = new S3Client(s3Config)

const getFileUrl = (filename) => `https://${bucketName}.s3.${region}.amazonaws.com/${filename}`

const postFile = async (file) => {
  const fileStream = fs.createReadStream(file)
  // Set the parameters
  const params = {
    Bucket: bucketName,
    Key: `${Date.now()}-${path.basename(file)}`,
    Body: fileStream,
    ContentType: 'media-type',
    ACL: 'public-read'
  }

  try {
    // const data = await s3Client.send(new PutObjectCommand(params))
    const data = await s3Client.send(new PutObjectCommand(params))
    return { ...data, keyId: params.Key } // For unit tests.
  } catch (err) {
    console.log('Error', err)
  }
}

const getFile = async (id) => {
  const params = {
    Bucket: bucketName,
    Key: id
  }

  const command = new GetObjectCommand(params)
  const image = await s3Client.send(command)

  if (image.Body.statusCode === 200) {
    const url = getFileUrl(id)
    return ({ url })
  } else {
    return image
  }
}

module.exports = {
  getFile,
  postFile
}
