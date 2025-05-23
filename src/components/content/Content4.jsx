
import { SiStylelint } from "react-icons/si";
import { SiStyleshare } from "react-icons/si";

function Content4() {
  return (
    <div className='bg-gray-700 h-screen flex justify-center relative gap-8 '>
      <div className='text-2xl text-white absolute top-50 m-4 hover:animate-pulse'>
        Our Distinctions
        <div className="flex justify-center items-center m-7 gap-8">
        <SiStylelint className="size-16" />
        <SiStyleshare className="size-16 " />
        </div>
      </div>
      <div className=' relative top-80 m:w-1/2 flex flex-col gap-4 '>
        <h1 className=' font-light text-white sm:justify-end m-8  hover:animate-pulse'>The awards received are testimony to the recognition
of the cutting-edge know-how and high standards of our studio.</h1>

      </div> 
      
    </div>
  )
}

export default Content4
