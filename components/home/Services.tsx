const Services = () => {
  return (
    <section className='py-12 px-24'>
        <h2 className='text-5xl w-fit mx-auto pb-10'>OUR SERVICES</h2>
        <div className="grid grid-cols-2 gap-10">
            <Service text='Endreinigung' img_link="/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash 2.avif" />
            <Service text='Spezialreinigung' img_link="/hugo-l-casanova-UTLQ3icUT7g-unsplash_edited.avif" />
            <Service text='Haushaltreinigung' img_link="/pierre-chatel-innocenti-muMR2IhCbZ0-unsplash.avif" />
            <Service text='Büroreinigung' img_link="/alex-mNJ7c7-XCZQ-unsplash.avif" />
        </div>
    </section>
  )
}

export default Services


import React from 'react'

const Service = ({text,img_link}:{text:string,img_link:string}) => {
  return (
    <div className='grid grid-cols-2 bg-blue-100'>
            <img className='w-full h-auto' src={img_link} alt="" />
        <div className='px-8 pt-20 pb-6 flex flex-col justify-between'>
            <p className='text-xl'>{text}</p>
            <div>
                <a className='px-14 py-2.5 bg-gray-500 text-white hover:bg-white hover:text-gray-500 border border-gray-500 duration-200' href='#'>Mehr</a>
            </div>
        </div>
    </div>
  )
}
