import React from 'react'
import "./About.css";
import { Typography } from '@mui/material';
import image from "../../assets/images/image.png"
function About() {
  return (
    <div className='about'>
    <div className="aboutContainer">
        <Typography>
            This is a samll Description about me....
        </Typography>
        </div>
    <div className="aboutContainer2">
            <div>
                <img src={image} alt="ME" className='aboutAvatar' />
                <Typography variant='h4' style={{
                    margin:"1vmax 0", color:"black"
                }}>
                    Kartik Sethi 
                </Typography>
                <Typography style={{
                    margin:"1vmax 0", color:"black"
                }}>
                    Full Stack Developer
                </Typography>
                <Typography>

                </Typography>
            </div>
            <div>
                <Typography style={{
                    textAlign:"right"
                }}>
                    Hi, I'm Kartik Sethi, a passionate Full Stack Developer specializing in the MERN stack. I enjoy building dynamic and scalable web applications with React.js for seamless user experiences and Node.js with Express.js for efficient backend solutions. My expertise includes working with MongoDB for database management, RESTful APIs, and state management using Redux.

                    During my 6-month internship as a Software Developer Intern, I worked on developing and optimizing full-stack applications, implementing responsive UI components, and improving backend performance. I thrive on solving complex problems and continuously refining my skills to build high-quality applications. Let's create something amazing together!
            </Typography>
</div>
        </div></div>
  )
}

export default About