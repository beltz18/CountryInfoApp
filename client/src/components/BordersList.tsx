import React from 'react'
import Link from 'next/link'

const BordersList = ({ borders }: any) => {
  return (
    <>
      <ul className='flex flex-col gap-2'>
        {
          borders.length > 0
            ?
          borders.map((cB: any) => (
            <Link
              href={`/country/${cB.commonName.toLowerCase()}`}
              key={ cB.commonName }
            >
              <li className='flex flex-col w-full bg-white hover:bg-slate-400 hover:text-white text-black border-[1px] px-6 py-2 border-[#00000025] rounded-md'>
                <span><b>Name: </b>{ cB.commonName }</span>
                <span><b>Region: </b>{ cB.region }</span>
              </li>
            </Link>
          ))
            :
          (
            <div>
              <span>No data Available for this country</span>
            </div>
          )
        }
      </ul>
    </>
  )
}

export default BordersList