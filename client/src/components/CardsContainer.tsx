import React       from 'react'
import CountryInfo from '@c/CountryInfo'
import Featured    from '@c/Featured'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@c/ui-components'
import {
  Search,
  Info,
  Map,
  BarChart,
} from 'lucide-react'

const CardsContainer = () => {
  return (
    <>
      <Card className="bg-white backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800 text-center mb-3">About <CountryInfo /></CardTitle>
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
              description="View important demographic statistics at a glance."
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default CardsContainer