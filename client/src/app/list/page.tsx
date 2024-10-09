import React from 'react'
import Header from '@c/Header'
import Layout from '@c/Layout'
import CountriesList from '@c/CountriesList'
import {
  loadCountriesData,
  getCountriesData,
} from '@l/serverActions'

const pageList = async () => {
  await loadCountriesData()

  try {
    const r = await getCountriesData()
    let data = r?.data?.data

    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <Layout>
            <Header />
            <CountriesList data={ data } />
          </Layout>
        </div>
      </>
    )
  } catch (err: any) {
    return (
      <div>
        <h1>Error when loading countries</h1>
        <p>{ err.cause }</p>
      </div>
    )
  }
}

export default pageList