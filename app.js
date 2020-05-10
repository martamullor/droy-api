// var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const { ValidationError, MongoError } = require('./lib/errors')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cors = require('cors')
var authRouter = require('./routes/auth')
var indexRouter = require('./routes/index')
var projectsRouter = require('./routes/projects')
var stylesRouter = require('./routes/styles')
var componentsRouter = require('./routes/components')
require('dotenv').config()

// Connect to DB
const dbPath = process.env.MONGODB_URI
mongoose.connect(dbPath, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log(`Connected to ${dbPath}`)
  })
  .catch((error) => {
    console.log(error)
  })

var app = express()
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_DOMAIN]
  })
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    name: 'droyAuthCookie',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  })
)

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/projects', projectsRouter)
app.use('/styles', stylesRouter)
app.use('/components', componentsRouter)

app.use((error, req, res, next) => {
  if (error.name === 'ValidatorError') {
    error = new ValidatorError(error, 'ValidatorError')
  }
  if (error.name === 'MongoError') {
    error = new MongoError(error, 'MongoError')
  }
  if (!error.isControlledError) {
    error.statusCode = 500
    error.errors = [`${error}`]
    error.message = 'Uncontorled error'
  }
  const { statusCode, errors, message } = error
  res.status(statusCode).json({
    errors,
    message
  })
})

module.exports = app
