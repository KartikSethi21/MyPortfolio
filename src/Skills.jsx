import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
  } from "react-icons/si";
const Skills = () => {
    useEffect(() => {
        const handleScroll = () => {
          const skillsBox = document.getElementById("homeskillsBox");
          if (!skillsBox) return;
      
          if (window.scrollY > 500) {
            skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          } 
          else {
            skillsBox.style.animationName = "homeskillsBoxAnimationOff";
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <>
    
    <style>
        {`




.homeSkills {
  transform: translateY(-200px);
  background-color: hsl(219, 48%, 8%);
  height: 1500px;
  position: relative;
  margin-bottom: -200px;
  padding: 200px;
  box-sizing: border-box;
  perspective: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
}

.homeSkills > h3 {
  text-align: center;
  color: white;
  margin-bottom: 4vmax;
  font-size: 4vmax;
}

.homeCubeSkills {
  width: 200px;
  height: 200px;
  animation: cubeRotation 15s linear infinite alternate;
  transform-style: preserve-3d;
}

.homeCubeSkillsFaces {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  position: absolute;
  width: inherit;
  height: inherit;
  opacity: 0.7;
}

.homeCubeSkillsFaces > img {
  width: inherit;
  height: inherit;
}

.homeCubeSkillsFace1 {
  transform: translate3d(0, 0, 100px);
}
.homeCubeSkillsFace2 {
  transform: rotateY(180deg) translate3d(0, 0, 150px);
}
.homeCubeSkillsFace3 {
  transform: rotateY(-90deg) translate3d(0, 0, 150px);
}
.homeCubeSkillsFace4 {
  transform: rotateY(90deg) translate3d(0, 0, 150px);
}
.homeCubeSkillsFace5 {
  transform: rotateX(90deg) translate3d(0, 0, 150px);
}
.homeCubeSkillsFace6 {
  transform: rotateX(-90deg) translate3d(0, 0, 150px);
}

.cubeShadow {
  width: 300px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.171);
  border-radius: 50%;
  animation: cubeShadow 1s ease-in-out infinite alternate;
  filter: blur(3px);
}

.homeskillsBox {
  background-color: hsl(250, 100%, 75%);
  padding: 2vmax 2vmax;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: -300px;
 height:70%;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  border-radius:25px;
}

.homeskillsBox > svg {
  font-size: 5vmax;
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  margin: 10px;
  
}
.homeskillsBox > svg:hover {
  transform: scale(1.5);
  rotate: -30deg;
}

@keyframes cubeRotation {
  to {
    transform: rotateY(360deg) rotateX(480deg) rotateZ(720deg);
  }
}

@keyframes cubeShadow {
  to {
    transform: scale(1.2) translateY(-10px);
  }
}

@keyframes homeskillsBoxAnimationOn {
  from {
    right: -300px;
  }
  to {
    right: 40px;
  }
}

@keyframes homeskillsBoxAnimationOff {
  from {
    right: 40px;
  }
  to {
    right: -300px;
  }
}



@media screen and (max-width: 600px) {
 
  .homeCubeSkills {
    width: 100px;
    height: 100px;
  }

  .homeCubeSkillsFace1 {
    transform: translate3d(0, 0, 75px);
  }
  .homeCubeSkillsFace2 {
    transform: rotateY(180deg) translate3d(0, 0, 75px);
  }
  .homeCubeSkillsFace3 {
    transform: rotateY(-90deg) translate3d(0, 0, 75px);
  }
  .homeCubeSkillsFace4 {
    transform: rotateY(90deg) translate3d(0, 0, 75px);
  }
  .homeCubeSkillsFace5 {
    transform: rotateX(90deg) translate3d(0, 0, 75px);
  }
  .homeCubeSkillsFace6 {
    transform: rotateX(-90deg) translate3d(0, 0, 75px);
  }
  .homeskillsBox > svg:hover {
  transform: scale(1.5);
  rotate: -30deg;
}
}
 @media screen and (max-width: 862px) {
    .homeskillsBox{
    bottom:100px;
    display:flex;
    flex-direction:row;
    width:100%;
    right:0;
    left:0;
    height:10%;
    }
     }
  @media screen and (max-width:2540px) and (min-width:1789px){
    .homeskillsBox{
     height:80%;
      bottom:30px;
    }
  }
        
          `}
   </style>
    <div className="homeSkills" >
    <Typography variant='h3'>
      SKILLS
      </Typography>
      <div className="homeCubeSkills">
        <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png" alt="Face1" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Face2" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" alt="Face3" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" alt="Face4" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png" alt="Face5" />
        </div>

        <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
          <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" alt="Face6" />
        </div>
      </div>

      <div className="cubeShadow"></div>
      <div className="homeskillsBox " id="homeskillsBox">
         <SiCplusplus/>
         <SiHtml5 />
         <SiCss3 />
         <SiJavascript />
         <SiMongodb />
         <SiExpress />
         <SiReact/>
         <SiNodedotjs />
         <SiThreedotjs />
      </div>
  </div>
  </>
  )
}

export default Skills