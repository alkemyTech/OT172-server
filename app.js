const fileUpload = require('express-fileupload')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes')
const errorLog = require('./middlewares/errorLog')
const errorHandler = require('./middlewares/errorHandler')
require('dotenv').config()

// Swagger
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs')
const optionsSwaggerUI = {
  customCss: '.swagger-ui .topbar { display: none }'
}

// Data inicial
const pkg = require('./package.json')

const app = express()

app.set('pkg', pkg)
const corsOptions = {
  // origin: false,
  // "preflightContinue": true,
  // origin: '*',
  origin: ['*', 'http://localhost:3005', 'http://localhost:3005/',
    'https://somosmas-ten.vercel.app/', 'https://somosmas-ten.vercel.app'],
  // credentials: true,
  // SameSite:'None',
  // Secure:true,
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: ['*', 'Content-Type', 'Authorization', 'x-access-token']
}
app.use(cors(corsOptions))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  fileUpload({
    tempFileDir: './upload',
    useTempFiles: true
  })
)

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    message: 'API para alimentar el front de la ONG',
    name: app.get('pkg').name,
    version: app.get('pkg').version,
    docs: 'http://localhost:3000/docs'
  })
})

// All routes
app.use('/', indexRouter)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs, optionsSwaggerUI))

app.use(errorLog)
app.use(errorHandler)

module.exports = app
