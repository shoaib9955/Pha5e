import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Content2() {
  return (
    <div className='bg-gray-700 max-h-fit w-full p-6' >
      <div className=' text-4xl text-white '>
             <h1 className='font-light p-5 flex justify-baseline tracking-widest'>Vision</h1>
      </div>
      <div className='bg-red-95 flex flex-col  justify-between m-4'>
      <h1 className='text-6xl text-white font-extrabold'>The more an experience is rich in meaning, the more its meaning is rich.</h1>
      <br/>
      <h1 className='text-2xl text-white tracking-wider font-extralight'>Living an immersive journey rich in emotions adds flesh and bones and meaning to a digital experience that is all too often cold. Not only does this process perfectly embody the core values of the brand, but the message delivered has a longer, deeper and more positive influence on the user.</h1>
      <br/>
      <h1 className='text-2xl text-white tracking-wider font-extralight'>The bringing together of digital creativity and knowledge in neuroscience has written into the DNA of our studio an artisanal know-how at the service of high technology. Each project is imagined and produced on a tailor-made basis, with listening, precision, rigour, originality and pleasure.</h1>
      <br/>
      </div>
      <div className=' font-light p-8 text-3xl tracking-widest flex gap-6 items-center  text-white   hover:underline underline-offset-1 '>
      <FaLongArrowAltRight className='size-13 text-white hover:animate-pulse hover:underline underline-offset-1' />  See More
      </div>
    </div>

  )
}

export default Content2
