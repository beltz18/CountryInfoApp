import express from 'express'
import parser  from 'body-parser'
import cors    from 'cors'
import logger  from 'morgan'

import countryManager from '../../routes/countryManager.routes.js'

const server = express()

const middlewares = () => {
  server.use(parser.json(), parser.urlencoded({ extended: true }))
  server.use(cors())
  server.use(logger('dev'))
  server.use(countryManager)
}

const app = () => {
  middlewares()
  return server
}

export default app