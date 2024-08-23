import React from 'react'
import { FaImage, FaNewspaper, FaBriefcase, FaEllipsisH } from 'react-icons/fa'
import {UserButton} from '@clerk/nextjs'
const Midnav = () => {
  return (
    <div className="flex-grow ml-1 pl-3 mt-4 mr-3">
      <div className='mb-4'>
        <div className='bg-black rounded-lg overflow-hidden border border-black'>
          <div className='p-4'>
            <div className='flex items-center gap-2'>
              <div> <UserButton/></div>
              <input type='text' placeholder='Start a post' className='flex-grow rounded-full text-white bg-black border border-gray-300 px-4 py-3 hover:bg-gray-900 focus:outline-none focus:ring-1 ' />
            </div>
            <div className='flex justify-between mt-4'>
              <button className='flex items-center justify-center text-gray-600 hover:bg-gray-900 rounded-md px-3 py-2'>
                <FaImage className="mr-2 text-blue-500" /> 
                <span>Photo</span>
              </button>
              <button className='flex items-center justify-center text-gray-600 hover:bg-gray-900 rounded-md px-3 py-2'>
                <FaNewspaper className="mr-2 text-green-500" /> 
                <span>Video</span>
              </button>
              <button className='flex items-center justify-center text-gray-600 hover:bg-gray-900 rounded-md px-3 py-2'>
                <FaBriefcase className="mr-2 text-purple-500" /> 
                <span>Job</span>
              </button>
              <button className='flex items-center justify-center text-gray-600 hover:bg-gray-900 rounded-md px-3 py-2'>
                <FaNewspaper className="mr-2 text-orange-500" /> 
                <span>Write article</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black rounded-lg overflow-hidden border border-black h-screen'>
        <div className='p-4'>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='font-bold text-white'>Feed</h2>
            <button className='text-gray-500 hover:bg-gray-100 rounded-full p-2'>
              <FaEllipsisH />
            </button>
          </div>
          {/* You can add feed items here */}
          <div className='text-gray-500 text-center py-4'>
            No new posts to show at the moment.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Midnav