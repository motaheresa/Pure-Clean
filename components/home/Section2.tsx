import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <section className='grid grid-cols-2'>
        <div className='flex flex-col gap-6 items-start justify-center w-3/4 mx-auto text-xl text-zinc-700'>
            <p>Möchtest du deine kostbare Zeit nicht mit Putzen verschwenden?</p>
            <p>Bist du Vollzeit berufstätig und hast keine Zeit zum Putzen?</p>
            <p>Möchtest du ein sauberes Büro, um produktiver arbeiten zu können?</p>
            <p>Ziehst du um und möchtest lieber die neue Wohnung einrichten als die Endreinigung der alten Wohnung bewältigen?</p>
            <p>Wird es dir schwindlig, wenn du an deine schmutzigen Fenster denkst?</p>
            <p>Falls du dich von diesen Fragen angesprochen fühlst, solltest du dich bei uns melden, denn das Leben ist viel schöner mit PureClean!</p>
        </div>
        <div className="img-wrapper relative"> 
            <Image className='object-cover' src="/cleaner4.jpg" fill alt="Cleaner Man" />
        </div>
    </section>
  )
}

export default Section2