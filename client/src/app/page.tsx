import React from 'react'
import Link from 'next/link'
import Featured from '@c/Featured'
import CountryInfo from '@c/CountryInfo'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@c/ui-components'
import {
  Globe,
  Search,
  Info,
  Map,
  BarChart,
  SearchIcon,
} from 'lucide-react'

const pageIndex = () : React.JSX.Element => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-blue-300 to-indigo-50 flex items-center justify-center">
        <div className="h-[100vh] flex flex-col justify-around overflow-auto xs:w-full md:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[50%]">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to <CountryInfo /> App</h1>
            <p className="text-xl text-gray-600">Discover the world at your fingertips</p>
          </header>

          <div className='flex gap-6 items-center justify-center px-[10%]'>
            <input
              type="text"
              placeholder='Type any country name...'
              className='w-full rounded-md border-[1px] border-[#00000025]'
            />
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white flex">
              <SearchIcon className="mr-2 h-5 w-5" /> Search
            </Button>
          </div>

          <Card className="bg-white backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">About <CountryInfo /></CardTitle>
              <CardDescription>
                <CountryInfo /> is your comprehensive guide to countries around the globe.
                Here are some features included in this demo:
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Featured
                  icon={<Search className="h-6 w-6 text-blue-500" />}
                  title="Powerful Search"
                  description="Find any country quickly with our intuitive search function."
                />
                <Featured
                  icon={<Info className="h-6 w-6 text-green-500" />}
                  title="Detailed Information"
                  description="Access comprehensive data on population, capital and currency"
                />
                <Featured
                  icon={<Map className="h-6 w-6 text-red-500" />}
                  title="Border Widget"
                  description="Explore the border countries."
                />
                <Featured
                  icon={<BarChart className="h-6 w-6 text-purple-500" />}
                  title="Key Statistics"
                  description="View important demographic and economic statistics at a glance."
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center flex gap-6 items-center justify-center">
            <p className="text-md text-gray-600">Discover the world at your fingertips</p>
            <Link href="/explore" passHref>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Globe className="mr-2 h-5 w-5" /> Start Exploring
              </Button>
            </Link>
          </div>

          <CardFooter className="flex items-center justify-center text-sm text-gray-600">
            &copy; { new Date().getFullYear() } &nbsp; <CountryInfo />. All rights reserved.
          </CardFooter>
        </div>
      </div>
    </>
  )
}

export default pageIndex