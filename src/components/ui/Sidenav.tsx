import React from 'react'

const Sidenav = () => {
  return (
    <div className="w-80">
      <div className='pt-2'>
        <div className='relative text-black h-96 pt-11 w-64 ml-40 bg-blackrounded-md overflow-hidden'>
          <div className='absolute inset-0 p-[2px] rounded-md '>
            <div className='h-full w-full bg-black text-white rounded-md'> <h2>Sidenav 1</h2></div>
          </div>
        </div>
      </div>

      <div className='pt-2'>
        <div className='relative text-black h-52 pt-11 w-64 ml-40 bg-black rounded-md overflow-hidden'>
          <div className='absolute inset-0 p-[2px] rounded-md '>
            <div className='h-full w-full bg-black text-white rounded-md'><h2>Sidenav 2</h2></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidenav