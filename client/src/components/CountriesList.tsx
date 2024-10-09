import React from 'react'
import Image from 'next/image'
import Link  from 'next/link'
import {
  Card,
  CardContent
} from './ui-components'

const CountriesList = ({ data }: any) => {
  return (
    <>
      {
        data.length > 0
          ?
        (
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
                          src={country.flag != 'no' ? country.flag : '/no.jpg'}
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
        )
          :
        (
          <div>
            <span>No data Available</span>
          </div>
        )
      }
    </>
  )
}

export default CountriesList