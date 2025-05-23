import React from 'react'

function Footer() {
    const footer=["linkedin" ,"instagram","email","contact","legal"]
  return (
    <div className='w-full bg-gray-400 flex h-svh'>
    <ul className="text-2xl  active:und uppercase">
{footer.map((item,index)=>(
   <li key={index} className="p-5 underline hover:scale-125 transition">
  {item}
</li>


))

}
    </ul>
    </div>
  )
}

export default Footer
