import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import TimeLine from './Timeline'
import { Typography} from "@mui/material";
import { sampleDates } from './sampleData'
import Skills from './Skills'


const App = () => {
  return (
      

    <div className='relative  overflow-hidden w-full ' >
      <div>
           
     <section id="home" >
       <Hero />
     </section>
     <section className='bg-white rounded-b-[200px] border-b-[150px]    border-white relative z-[1] mt-10 h-900px'>
          <Typography variant='h3' className='text-center  text-[rgba(22,20,20,0.904)] pt-8 '> 
            TIMELINE
            <TimeLine timelines={sampleDates}/>
          </Typography>
      </section>

      <section >
        <Skills/>
      </section>
      

    </div>

    </div>
  )
}

export default App