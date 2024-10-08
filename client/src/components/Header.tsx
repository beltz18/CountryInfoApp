import React       from 'react'
import Link        from 'next/link'
import CountryInfo from '@c/CountryInfo'

const Header = () : React.JSX.Element => {
  return (
    <>
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to <CountryInfo /> App</h1>
        <p className="text-xl text-gray-600">Discover the <Link href='/list' className='text-blue-800'>world</Link> at your fingertips</p>
      </header>
    </>
  )
}

export default Header