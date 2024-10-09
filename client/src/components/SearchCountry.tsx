'use client'

import React, { useState } from 'react'
import { useRouter }       from 'next/navigation'
import { Button }          from '@c/ui-components'
import { SearchIcon }      from 'lucide-react'

const SearchCountry = () : React.JSX.Element => {
  const router = useRouter()
  const [countryName, setCountryName] = useState<string>("")

  const handleSearch = () => {
    if (countryName.trim())
      router.push(`/country/${countryName}`)
  }

  return (
    <>
      <div className='flex gap-6 items-center justify-center px-[10%]'>
        <input
          type="text"
          placeholder='Type any country name...'
          className='w-full rounded-md border-[1px] border-[#00000025]'
          onChange={(e: any) => setCountryName(e.target.value)}
        />

        <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white flex"
          onClick={ handleSearch }
        >
          <SearchIcon className="sm:mr-2 h-5 w-5" />
          <span className='hidden sm:block'>Search</span>
        </Button>
      </div>
    </>
  )
}

export default SearchCountry