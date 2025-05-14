import React from 'react'
import { Hover } from './Hover'

function Process() {
  return (
    <div>
    <div className='mt-10'>
        <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent text-start ml-10 bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var">Our Statistics</h1>
    </div>

       <div className='mt-10'>
       <Hover/>
       </div>
    </div>
  )
}

export default Process