import React from 'react'
import { FaBookmark, FaUserFriends, FaUsers } from 'react-icons/fa'
import { UserButton } from '@clerk/nextjs'
const Sidenav = () => {
  
  return (
    <div className="w-64 ml-40 mt-4">
      <div className='mb-2'>
        <div className='bg-black rounded-lg overflow-hidden border border-gray-300'>
          <div className='bg-cover bg-center h-16' style={{backgroundImage: "url('https://example.com/cover-image.jpg')"}}></div>
          <div className='text-center -mt-8'>
          <UserButton />
          <h2 className='font-bold text-white'>Your Name</h2>
            <p className='text-sm text-gray-600'>Your Headline</p>
          </div>
          <div className='px-4 py-2'>
            <div className='flex justify-between text-sm border-t border-gray-200 pt-2 mt-2'>
              <span className='text-gray-600'>Who's viewed your profile</span>
              <span className='font-bold text-blue-600'>47</span>
            </div>
            <div className='flex justify-between text-sm border-t border-gray-200 pt-2 mt-2'>
              <span className='text-gray-600'>Impressions of your post</span>
              <span className='font-bold text-blue-600'>524</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <div className='bg-black rounded-lg overflow-hidden border border-gray-300'>
          <div className='p-4'>
            <h3 className='font-bold mb-2'>Recent</h3>
            <ul className='text-sm'>
              <li className='flex items-center mb-2 text-white'><FaUsers className="mr-2 text-white" /> Group 1</li>
              <li className='flex items-center mb-2 text-white'><FaUserFriends className="mr-2 text-white" /> Event 1</li>
              <li className='flex items-center mb-2 text-white'><FaBookmark className="mr-2 text-white" /> Saved Item 1</li>
            </ul>
            <button className='text-sm font-bold text-gray-600 mt-2'>Groups</button>
            <div className='flex justify-between items-center mt-2'>
              <button className='text-sm font-bold text-gray-600'>Events</button>
              <button className='text-sm font-bold text-blue-600'>+</button>
            </div>
            <button className='text-sm font-bold text-blue-600 mt-2'>Followed Hashtags</button>
          </div>
          <div className='bg-gray-100 p-4 text-center'>
            <button className='text-sm font-bold text-gray-600'>Discover more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav