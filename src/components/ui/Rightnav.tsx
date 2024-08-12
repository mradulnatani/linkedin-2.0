import React from 'react'

const Rightnav = () => {
  return (
    <div className="w-1/4 mr-44 ">
      <div className='pt-2'>
        <div className='relative text-black h-[calc(60vh-2rem)] bg-gray-950 rounded-md overflow-hidden'>
          <div className='absolute inset-0 p-[2px] rounded-md '>
            <div className='h-full w-full bg-gray-950 rounded-md p-4'>
              <h3 className="text-white text-lg mb-4">Right Nav Top</h3>
              {/* Add content for right nav here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightnav