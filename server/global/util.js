import axios from 'axios'
import {
  instanceDateNager,
  instanceCountries,
} from '../global/instance.js'


export const defaultResponse = {
  status: false,
  code: 200,
  message: 'default',
  data: null,
}

export async function fetchCountryData() {
  try {
    const availableCountriesResponse = await instanceDateNager.get('/AvailableCountries')
    const availableCountries = availableCountriesResponse.data

    const countriesDataPromises = availableCountries.map(async (country) => {
      const { countryCode, name } = country

      const flagResponsePromise = instanceCountries.get('/flag/images')
      const bordersResponsePromise = instanceDateNager.get(`/CountryInfo/${countryCode}`)
      const populationResponsePromise = instanceCountries.get('/population')

      const [flagResponse, bordersResponse, populationResponse] = await Promise.all([
        flagResponsePromise,
        bordersResponsePromise,
        populationResponsePromise
      ])

      const flagInfo = flagResponse.data.data.find(f => f.name === name)

      const populationInfo = populationResponse.data.data.find(p => p.country === name)

      return {
        name,
        countryCode,
        flag: flagInfo?.flag || 'no',
        borders: bordersResponse.data.borders || [],
        population: populationInfo?.populationCounts || []
      }
    })

    const countriesData = await Promise.all(countriesDataPromises)

    return countriesData
  } catch (err) {
    console.error('Error when trying to get countries data:', err.cause)
    return []
  }
}