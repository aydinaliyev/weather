import Image from 'next/image'
import React from 'react'
import spinner from '../public/spinner.gif'


function Spinner() {
  return (
    <>
        <Image alt="loading..." src={spinner} className="w-[200] m-auto block" />
    </>
  )
}

export default Spinner