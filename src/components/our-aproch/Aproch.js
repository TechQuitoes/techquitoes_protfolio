import React from 'react'
import ProcessFramework from '../remote/ProcessFramework'
import RecentWork from '../../sections/RecentWork'
import Testimonials from '../../sections/Testimonials'

const Aproch = () => {
  return (
    <div className='w-full bg-white px-5 py-[70px] sm:px-8 lg:px-6'>
        <ProcessFramework/>
        <RecentWork/>
        <Testimonials/>
    </div>
  )
}

export default Aproch