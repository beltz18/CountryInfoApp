import React from 'react'

const Layout = ({ children }:
  Readonly<{ children: React.ReactNode }>) : React.JSX.Element => {
  return (
    <>
      <div className="h-[100vh] p-4 flex flex-col gap-12 justify-around overflow-auto xs:w-full md:max-w-[90vw] lg:max-w-[800px]">
        { children }
      </div>
    </>
  )
}

export default Layout