import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CardsContainer from '@c/CardsContainer'
import CountryInfo from '@c/CountryInfo'
import Header from '@c/Header'
import Layout from '@c/Layout'
import { Button, CardFooter } from '@c/ui-components'
import { Globe } from 'lucide-react'
import { loadCountriesData } from '@l/serverActions'

const SearchCountry = dynamic(() => import('@c/SearchCountry'), { ssr: false })

const pageIndex = async () => {
  try { await loadCountriesData() }
  catch (err) { false }
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <Layout>
          <Header />
          <SearchCountry />
          <CardsContainer />

          <div className="text-center flex gap-6 items-center justify-center">
            <p className="text-md text-gray-600 hidden md:block">Discover the <Link href='/list' className='text-blue-800'>world</Link> at your fingertips</p>
            <Link href="/list" passHref>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Globe className="mr-2 h-5 w-5" /> Explore
              </Button>
            </Link>
          </div>

          <CardFooter className="flex items-center justify-center text-sm text-gray-600">
            &copy; { new Date().getFullYear() } &nbsp; <CountryInfo />.
          </CardFooter>
        </Layout>
      </div>
    </>
  )
}

export default pageIndex