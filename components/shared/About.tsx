import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
  <section className="min-h-screen bg-white">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-16 lg:px-6">
        <div className="font-light text-black sm:text-lg">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold">Puducherry Technological Univeristy</h2>
            <p className="mb-4 text-justify "> Puducherry Technological University(PTU) is an university that strives to provide quality education and research opportunities to its students and contribute to the growth and development of the region. The university aims to provide quality education and training to its students to prepare them for the challenges of the global workforce. It has a team of experienced and dedicated faculty members who use modern teaching methods to impart knowledge and skills to students.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image 
              className="w-full rounded-lg" 
              src="/assets/hero/herotest.png" 
              width={200}
              height={400}
              alt="PTUcampus" />
            <Image 
              className="mt-4 w-full lg:mt-10 rounded-lg" 
              src="/assets/hero/herotest.png" 
              width={500}
              height={1000}
              alt="PTUdroneshot" />
        </div>
    </div>

    <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="font-light text-black sm:text-lg ">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold">Rejuoir</h2>
            <p className="mb-4 text-justify ">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image 
              className="w-full rounded-lg" 
              src="/assets/hero/herotest.png" 
              width={500}
              height={1000}
              alt="PTUcampus" />
            <Image 
              className="mt-4 w-full lg:mt-10 rounded-lg" 
              src="/assets/hero/herotest.png" 
              width={500}
              height={1000}
              alt="PTUdroneshot" />
        </div>
    </div>
  </section>
  )
}
