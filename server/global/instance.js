import axios  from "axios"
import * as v from './var.js'

export const instanceDateNager = axios.create({
  baseURL: v.APIDATENAGER,
  timeout: v.TIME,
})

export const instanceCountries = axios.create({
  baseURL: v.APICOUNTRIES,
  timeout: v.TIME,
})