require('dotenv').config()

// Import required AWS SDK clients and commands for Node.js.
const { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsCommand } = require('@aws-sdk/client-s3')
// const { s3Client } = require('./libs/s3Client.js') // Helper function that creates an Amazon S3 service client module.
const path = require('path')
const fs = require('fs')

const filePath = '/home/fom78/aceleracion/imagenPrueba.jpeg'
const region = 'us-east-1'
// configurar AWS con las claves de acceso
const s3Config = {
  region,
  credentials: {
    accessKeyId: process.env.AWS_S3_PUBLIC_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY
  }
}

const s3Client = new S3Client(s3Config)

const getFileUrl = (filename) => `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${region}.amazonaws.com/${filename}`

const bucketParams = { Bucket: process.env.AWS_S3_BUCKET_NAME }

const postFile = async (file) => {
  const fileStream = fs.createReadStream(file)
  // Set the parameters
  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    // Add the required 'Key' parameter using the 'path' module.
    Key: 'folder/' + Date.now() + '_' + path.basename(file),
    // Add the required 'Body' parameter
    Body: fileStream,
    ContentType: 'image/jpeg'
  }
  console.log(uploadParams.Bucket)
  try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams))
    console.log('Success', data)
    return data // For unit tests.
  } catch (err) {
    console.log('Error', err)
  }
}
const getFile = async (id) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: id
  }

  // try {
  //   // Create a helper function to convert a ReadableStream to a string.
  //   const streamToString = (stream) =>
  //     new Promise((resolve, reject) => {
  //       const chunks = []
  //       stream.on('data', (chunk) => chunks.push(chunk))
  //       stream.on('error', reject)
  //       stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
  //     })

  //   // Get the object} from the Amazon S3 bucket. It is returned as a ReadableStream.
  //   const data = await s3Client.send(new GetObjectCommand(params))
  //   // return data // For unit tests.
  //   // Convert the ReadableStream to a string.
  //   const bodyContents = await streamToString(data.Body)
  //   console.log(bodyContents)
  //   return bodyContents
  // } catch (err) {
  //   console.log('Error', err)
  // }

  const command = new GetObjectCommand(params)
  const image = await s3Client.send(command)

  if (image.Body.statusCode === 200) {
    const url = getFileUrl(id)
    console.log(url)
    return ({ url })
  } else {
    return image
  }
}
const run = async () => {
  try {
    const data = await s3Client.send(new ListObjectsCommand(bucketParams))
    console.log('Success', data)
    return data // For unit tests.
  } catch (err) {
    console.log('Error', err)
  }
}
module.exports = {
  getFile,
  postFile,
  run
}
// postFile(filePath)
getFile('folder/1651437535061_imagenPrueba.jpeg')
