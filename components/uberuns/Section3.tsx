import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <section className='flex flex-col items-center justify-center py-20'>
        <Image width={176} height={176} className='rounded-full w-44' src="/Bildschirmfoto 2023-03-17 um 12_17_30.avif" alt="" />
        <h2 className="text-xl my-2">Fred Manuel Delgado Ponce</h2>
        <p>Geschäftsinhaber</p>
    </section>
  )
}

export default Section3