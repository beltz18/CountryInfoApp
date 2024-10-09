import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PopulationChart from '@c/PopulationChart'
import BordersList from '@c/BordersList'
import { CountryName } from '@l/types'
import { getCountryData } from '@l/serverActions'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from '@c/ui-components'

const pageCountry = async ({ params }: CountryName) => {
  const name = params.name

  try {
    const r = await getCountryData(name)
    const country = r.data.data

    return (
      <>
        {
          country?.name
            ?
          (
            <div className="min-h-screen text-gray-100 p-8">
              <Card className="max-w-3xl mx-auto bg-gray-800 shadow-xl">
                <Link href='/list' className='p-4 underline text-blue-400'>Go back to List</Link>
                <CardHeader className="relative pb-0">
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="relative pt-20 px-4 flex items-end space-x-4">
                    <Image
                      src={ country.flag != 'no' ? country.flag : '/no.jpg' }
                      alt={ country.flag }
                      width={100}
                      height={100}
                    />
                    <div className="pb-4">
                      <CardTitle className="text-3xl font-bold">{country.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <h2 className="text-[20px] font-bold mb-4">Population:</h2>
                  <PopulationChart data={ country.population || [] } />
                  <h2 className="text-[20px] font-bold mt-8 mb-4">Borders:</h2>
                  <BordersList borders={ country.borders || [] } />
                </CardContent>
              </Card>
            </div>
          )
            :
          (
            <div className='w-full h-[100vh] flex flex-col'>
              <Link href='/list' className='underline text-blue-400'>Go back to List</Link>
              <span className='text-red-700 text-sm underline'>The country you&apos;re trying to search does not exist</span>
            </div>
          )
        }
      </>
    )
  } catch (err: any) {
    return (
      <div>
        <h1>Error when loading country data</h1>
        <p>{ err.cause }</p>
      </div>
    )
  }
}

export default pageCountry