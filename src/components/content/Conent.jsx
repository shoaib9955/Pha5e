import React from 'react'


function Conent() {
  return (
    <div className='bg-gray-700 h-svh flex justify-center items-center overflow-hidden'>
    
      <div className='box-border      
      size-150 flex  justify-center items-center  p-4 rounded-lg relative  '>
   
        <div className='flex  justify-center  w-svh'>
          <img
            src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/map-interactive.png"
            alt="Concept 1"
            className='size-70 object-cover absolute -top-2 -right-10
            tranistion hover:scale-120 opacity-15 hover:opacity-70 hover:animate-bounce' 
          />
          <img
            src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/bigger-science_thumbnail-2.png"
            alt="Concept 2"
            className=' size-70 object-cover absolute -top-5 -left-7
             tranistion hover:scale-120 opacity-15 hover:opacity-70 hover:animate-bounce'
          />
          <img
            src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/Capture%20da%C3%8CeI%C3%8Ccran%202024-01-04%20aI%C3%8C%2016.41.06-2.png"
            alt="Concept 3"
            className='size-70 object-cover absolute -bottom-5 -left-7
             tranistion hover:scale-120 opacity-15 hover:opacity-70 hover:animate-bounce'
          />
          <img
            src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/Capture-d%C3%A2e%C3%8Ccran-2023-04-03-a%C3%8C-10.59.43_2-2.jpg"
            alt="Concept 4"
            className='size-70 absolute -bottom-7 -right-5 object-cover 
             tranistion hover:scale-120 opacity-15 hover:opacity-70 hover:animate-bounce'
          />
          <h1 className=' flex justify-center align-middle  font-bold text-white text-7xl absolute inset-50 left-70  transition hover:scale-170 hover:opacity-25 max-sm:animate-bounce '>
          imagining unique concepts and digit experience
        </h1>
        </div>
        
      </div>
    </div>
  )
}


export default Conent
