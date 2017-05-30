import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import cors from 'cors'
import logger from 'morgan'

import v1routes from './routes/v1'

import configs from './constants/configs'

import models from './models'

const app = express()

// Logger and API parsing
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// Monitoring
app.use('/heartbeat', (req, res) => {
  res.json({
    status: 'OK',
    queryTime: new Date(),
    currentVersion: process.env.npm_package_version
  })
})

// Mount API Routes
app.use('/api/v1/', v1routes)

export default app
