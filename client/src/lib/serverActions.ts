'use server'

import { instance } from "@l/utils"

export const loadCountriesData = async () => await instance.get('/')
export const getCountriesData  = async () => await instance.get('/available')