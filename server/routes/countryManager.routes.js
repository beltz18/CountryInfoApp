import { response, Router } from "express"
import fs         from 'fs'
import { join }   from "path"
import * as v     from '../global/var.js'
import {
  defaultResponse,
  fetchCountryData,
} from '../global/util.js'

const countryManager = Router()
const filePath = join(process.cwd(), 'global', 'countries.json')

/*
  '/'

  handles a GET request

  Detects if the `countries.json` file exists
  if not, creates the file with all the countries data
  retrieved asynchronously
*/
countryManager.get('/', async (req, res) => {
  const response = { ...defaultResponse }
  response['message'] = 'Ping Pong. Checking data...'

  if (!fs.existsSync(filePath)) {
    const r = await fetchCountryData()
    if (r.length > 0) {
      response['message'] = 'cached data'
      response['data'] = r
      fs.writeFileSync(filePath, JSON.stringify(r))
    }
  }

  res.status(response['code']).json(response)
})

/*
  '/available'

  handles a GET request

  Detects if the `countries.json` file exists
  if not, creates the file with an empty array
  if yes, retrieved the data parsed into a JSON
*/
countryManager.get('/available', async (req, res) => {
  const response = { ...defaultResponse }

  if (!fs.existsSync(filePath)) {
    const r = await fetchCountryData()
    if (r.length > 0) {
      response['message'] = 'cached data'
      response['data'] = r
      fs.writeFileSync(filePath, JSON.stringify(r))
    }
  } else {
    const dataText = fs.readFileSync(filePath, 'utf-8')
    const dataJson = JSON.parse(dataText)
    response['status']  = true
    response['message'] = 'retrieved countries data'
    response['data']    = dataJson
  }

  res.status(response['code']).json(response)
})

countryManager.get('/country/:name', async (req, res) => {
  const { name } = req.params
  const response = { ...defaultResponse }

  if (!fs.existsSync(filePath)) {
    const r = await fetchCountryData()
    if (r.length > 0) {
      response['message'] = 'cached data'
      response['data'] = r
      fs.writeFileSync(filePath, JSON.stringify(r))
    }
  } else {
    const dataText = fs.readFileSync(filePath, 'utf-8')
    const dataJson = JSON.parse(dataText)

    const dataDesired = dataJson.find(el => el.name.toLowerCase() === name.toLowerCase())
    console.log(dataDesired)

    response['status']  = true
    response['message'] = 'retrieved country data'
    response['data']    = dataDesired || []
  }

  res.status(response['code']).json(response)
})

export default countryManager