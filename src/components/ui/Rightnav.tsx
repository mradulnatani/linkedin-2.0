import React, { useState, useEffect } from 'react'

const Rightnav = () => {
  const motivation = [
    "Dream big, start small.",
    "Be the change.",
    "Stay focused.",
    "Believe you can.",
    "Never give up.",
    "Make it happen.",
    "Think positive.",
    "Stay hungry, stay foolish.",
    "Embrace the journey.",
    "Keep moving forward.",
    "Do what you love.",
    "Be fearless.",
    "Create your own sunshine.",
    "Make today count.",
    "Rise and grind.",
    "Push your limits.",
    "Choose happiness.",
    "Seize the day.",
    "Stay curious.",
    "Work hard, play hard."
  ]
  const jobData = [
    { domain: 'IT', count: 150 },
    { domain: 'Marketing', count: 100 },
    { domain: 'Sales', count: 120 },
    { domain: 'Design', count: 80 },
    { domain: 'Finance', count: 90 },
  ];
  const maxCount = Math.max(...jobData.map(job => job.count));


  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % motivation.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-1/4 mr-44 mt-2">
      <div className='pt-2'>
        <div className='relative text-white bg-black rounded-lg overflow-hidden border border-gray-300'>
          <div className='p-4'>
            <h3 className="text-white text-lg font-semibold mb-4">Your Activity</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">1,234 post views</p>
              <div className="w-full h-40 bg-gray-800 rounded-lg">
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
              <p className="text-gray-400">Your post views have increased by 30% in the last week.</p>
              <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">View all activity</a>
            </div>
          </div>
          <div className="text-sm p-4 h-auto">
            <h3 className='font-semibold text-lg'>Stay motivated!</h3>
          </div>
          <div className="text-sm px-4 pb-2">
            <p className="text-gray-400 mb-2">{motivation[currentQuoteIndex]}</p>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <div className='bg-black rounded-lg overflow-hidden border border-gray-300'>
          <div className='p-4'>
            <h3 className='font-bold mb-2 text-white'>Available Jobs by Domain</h3>
            <div className="w-full h-60">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {jobData.map((job, index) => (
                  <g key={job.domain}>
                    <rect
                      x={index * 20}
                      y={100 - (job.count / maxCount) * 80}
                      width="15"
                      height={(job.count / maxCount) * 80}
                      fill="#0a66c2"
                    />
                    <text
                      x={index * 20 + 7.5}
                      y="98"
                      fontSize="8"
                      textAnchor="middle"
                      fill="white"
                    >
                    </text>
                    <text
                      x={index * 20 + 7.5}
                      y={96 - (job.count / maxCount) * 80}
                      fontSize="6"
                      textAnchor="middle"
                      fill="white"
                    >
                      {job.count}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rightnav