import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@c/Header'
import Layout from '@c/Layout'
import { Card, CardContent } from '@c/ui-components'
import {
  loadCountriesData,
  getCountriesData,
} from '@l/serverActions'

const pageList = async () => {
  await loadCountriesData()

  try {
    const r = await getCountriesData()
    let data = r?.data?.data
    console.log(data)

    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <Layout>
            <Header />
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 rounded-md">
              {
                data.map((country: any) => (
                  <Link
                    href={`/country/${country.name.toLowerCase()}`}
                    key={country.name}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-200 h-[100px] flex gap-2 items-center">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          
                              <Image
                                src={ country.flag != 'no' ? country.flag : '/no.jpg' }
                                alt='flag'
                                width={50}
                                height={50}
                              />
                            
                          

                          <div>
                            <h2 className="font-semibold text-lg">{country.name}</h2>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              }
            </div>
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