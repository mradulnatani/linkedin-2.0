import React from 'react'

const Rightnav = () => {
  return (
    <div className="w-1/4 mr-44 mt-2">
      <div className='pt-2'>
        <div className='relative text-white bg-black rounded-lg overflow-hidden border border-gray-300'>
          <div className='p-4'>
            <h3 className="text-white text-lg font-semibold mb-4">Your Activity</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">1,234 post views</p>
              <div className="w-full h-40 bg-gray-100 rounded-lg">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#0a66c2"
                    strokeWidth="2"
                    points="0,90 10,80 20,85 30,70 40,75 50,50 60,55 70,30 80,35 90,20 100,25"
                  />
                  <g fill="#0a66c2">
                    {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((x, i) => (
                      <circle key={i} cx={x} cy={100 - (x === 0 ? 10 : x)} r="2" />
                    ))}
                  </g>
                </svg>
              </div>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">Your post views have increased by 30% in the last week.</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">View all activity</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightnav