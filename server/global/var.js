import dotenv from 'dotenv'
dotenv.config()

const PORT   = process.env.PORT
const SERVER = process.env.SERVER
const TIME   = process.env.TIME

const APIDATENAGER = process.env.APIDATENAGER
const APICOUNTRIES = process.env.APICOUNTRIES

export {
  PORT, SERVER, TIME,
  APIDATENAGER, APICOUNTRIES,
}