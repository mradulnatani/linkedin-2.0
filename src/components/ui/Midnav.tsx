import React from 'react'

const Midnav = () => {
  return (
    <div className="flex-grow ml-24 pl-3">
      <div className='pt-2 pb-2'>
        <div className='relative text-black h-[calc(20vh-2rem)] bg-gray-800 rounded-md overflow-hidden w-11/12'>
          <div className='absolute inset-0 p-[2px] rounded-md'>
            <div className='h-full w-full bg-grey-600 rounded-md p-4'>
              {/* Content for Midnav goes here */}
              <h2 className="text-white text-2xl">Midnav Content</h2>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
      </div>
      <div className='relative text-black h-screen bg-gray-800 rounded-md overflow-hidden w-11/12 px-3 '>
      <h2>Feed</h2>
      </div>
    </div>
    
  )
}

export default Midnav