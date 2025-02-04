import React from 'react'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <div className='footer bg-[rgb(26,26,26)] text-white grid  grid-cols-[1fr_200px] gap-4 p-16    '>
        <div>
        <Typography variant='h5' className='border-b-[1px] border-white border-solid w-[120px] mb-[50px] pt-[10px]  hover:text-[rgb(64,88,226)]'>
            About Me 
        </Typography>
        <Typography className='w-[60%] pt-6 hover:text-[rgb(64,88,226)]'>
            Hey, my name is Kartik Sethi. I am A motivated and skilled Full Stack Developer 
            with a recent M.Sc. in Informatics from the University of Delhi.
             Demonstrates proficiency in data structures, algorithms,
              and a wide range of programming languages,with a strong grasp of their
               intricacies. Specialized expertise in the MERN stack. 
               Adept at both frontend and backend development, with a keen ability to 
               quickly learn and adapt to new technologies. Excels in problem-solving
             and is eager to contribute to innovative projects in a collaborative environment 
        </Typography>

        <Link to="/connect" className='bg-white text-black p-[7px] w-[120px] items-center justify-center place-items-center block mt-5 border-[1px] border-solid border-white transition-all duration-200 hover:bg-black hover:cursor-pointer hover:text-white'>
            <Typography>
                Contact Us 
            </Typography>
        </Link>
        </div>
        <div className='font-bold text-7xl transition-all duration-200 flex flex-col'>
            <Typography variant='h6'  className='pt-9 hover:text-[rgb(64,88,226)]'>
                GitHub
            </Typography>
            
            <a href='https://github.com/KartikSethi21/' target='_blank' rel="noopener noreferrer"  className='hover:text-[rgb(64,88,226)]'>
            <BsGithub/>
            </a>
            <Typography variant='h6' className='pt-9 hover:text-[rgb(119,61,212)]'>
                LinkedIn 
            </Typography>
            <a href='https://www.linkedin.com/in/kartik-sethi-4865311b2/' target='_blank' rel="noopener noreferrer"  className='hover:text-[rgb(119,61,212)]'>
            <BsLinkedin/>
            </a>
        </div>
    </div>
  )
}

export default Footer