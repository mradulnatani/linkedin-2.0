import React from 'react'
import { FaImage, FaNewspaper, FaBriefcase } from 'react-icons/fa'

const Midnav = () => {
  return (
    <div className="flex-grow ml-24 pl-3">
      <div className='pt-2 pb-2 '>
        <div className='relative text-black h-[calc(25vh-2rem)] bg-black rounded-md overflow-hidden w-11/12'>
          <div className='absolute inset-0 p-[2px] rounded-md'>
            <div className='h-full w-full bg-grey-600 rounded-md p-4'>
          <div>
            <ul className='list-none flex flex-row justy-between align-middle gap-2'>
<li>
  <div className='h-10 w-10 bg-white rounded-full'></div>
</li>
<li>
  <input type='text' placeholder='Start writing a post....' className=' absolute rounded-full text-white bg-black border border-white w-10/12 pl-2 h-2/6' />
</li>
            </ul>
            <ul className='list-none flex flex-row justify-between align-middle gap-20 float-left mt-8  mb-10 h-10'>
              <li><button className='h-11 w-32 rounded-md hover:bg-gray-700 flex items-center justify-center text-white'><FaImage className="mr-2 text-blue-600" /> Add Media</button></li>
              <li><button className='h-11 w-32 rounded-md hover:bg-gray-700 flex items-center justify-center text-white'><FaNewspaper className="mr-2 text-purple-600" /> Add Article</button></li>
              <li><button className='h-11 w-32 rounded-md hover:bg-gray-700 flex items-center justify-center text-white'><FaBriefcase className="mr-2 text-orange-400 " /> Post a Job</button></li>
            </ul>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative text-white h-screen bg-black rounded-md overflow-hidden w-11/12 px-3 '>
      <h2>Feed</h2>
      </div>
    </div>
    
  )
}

export default Midnav