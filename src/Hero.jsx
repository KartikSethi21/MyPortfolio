import { MouseOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import Logo from "../assets/images/header-img.svg";
const Home = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleteting,setIsDeleting]=useState(false);
    const toRotate =["Software Developer","Full Stack Developer","Web Developer"];
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300 - Math.round() * 100);
    const period=1000;
    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)

        return()=>{clearInterval(ticker)};
    },[text]);

    const tick=()=>{
        let i= loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updateText=isDeleteting ? fullText.substring(0,text.length -1): fullText.substring(0,text.length+1);

        setText(updateText);

        if(isDeleteting){
            setDelta(prev=> prev/2);
        }

        if(!isDeleteting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleteting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
    
    
   
  return (
    <>
    <style>
        {`
        .full{
        background-size: 100% 100%;
        width:100%;
        }
        .astro{
          animation:5s linear infinite updown;
        }
        .homeScrollBtn {
         display: flex;
         align-items: center;
         justify-content: center;
         position: absolute;
         bottom:0%;
         left: 50%;
         border-radius: 100%;
         transform: translateY(-150%);
         padding: 0.5vmax;
         animation: scrollPop 0.5s ease-in infinite alternate;
        }
        .homeScrollBtn > svg {
          font-size: 3vmax;
          color: rgb(255, 255, 255);
        }

        @keyframes updown{
        0%{
           transform:translateY(-40px);
        }
        50%{
           transform:translateY(40px);
       }
        100%{
           transform:translateY(-40px);
        }
      }
    @keyframes scrollPop {
         to {
           transform: translateY(-200%);
           }
        }
         @media screen and (max-width: 1093px){
         .head{
         width:100%;
         border:none;
        padding-bottom:35px;
         margin:0px;
         }
         .wri{
        max-width:100%;
        padding-left:100px;
        }
         }
        @media screen and (max-width: 1092px) and (min-width:865px){
        .astro{
        padding-top:80px;
        max-height:500px;
        }
        }
        @media screen and (max-width:864px){
            .astro{
        display:none;
        }
        .wri{
        max-width:100%;
        }
        .gf{
        display:block;
        padding-left:0rem;
        }
        }
        @media screen and (max-width:339px){
        .wri{
        align-items:start;
        padding-left:5px;
       
    
        }
        }
        
    `}
   </style> 
    <section className='full bg-[url(../assets/images/banner-bg.png)] bg-no-repeat bg-cover w-full h-[750px] relative z-10 text-white mb-0 overflow-hidden justify-stretch items-stretch'>
    <div className='gf flex flex-row relative'>           
         {/* left side */}
            <div className='wri flex-col md:max-w-[calc(100%-600px)]  relative items-center justify-center mt-0 lg:ml-8 p-32 xl:mt-20'>
                <div className='head    lg:border lg:p-5 lg:border-white rounded-md mb-5  hover:bg-white hover:text-black hover:border-4 hover:border-black transition-all duration-200 border-0 '>
                <h3 className='text-5xl  rounded-md '>
                    Welcome to my Portfolio 
                </h3>
                </div>
                
                <h1 className='text-5xl '>
                    {"Hi I'm Kartik Sethi a "}
                    <br />
                    <span className='text-yellow-500'> {text}</span>
                </h1>
                {/* <p>About Myself</p> */}

            </div>
            {/* right side */}
            <div className='bal md:w-[600px] hidden md:relative  md:block  '> 
            {/* sm:hidden */}
                <img src={Logo} alt="Header Image"  className=' absolute  md:right-0 md:top-20  lg:right-0 lg:bottom-24  astro hidden md:block md:border-white lg:pt-14   md:max-h-[500px]  lg:max-h-[700px]'/>
            </div>
            </div>
            <div className="homeScrollBtn">
        <MouseOutlined/>
      </div>

    </section>
    </>
   )
}

export default Home;


// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const toRotate = ["Software Developer", "Full Stack Developer", "Web Developer"];
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300);
//   const period = 1000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => clearInterval(ticker);
//   }, [text]);

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updateText);

//     if (isDeleting) {
//       setDelta((prev) => prev / 2);
//     }

//     if (!isDeleting && updateText === fullText) {
//       setIsDeleting(true);
//       setDelta(period);
//     } else if (isDeleting && updateText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setDelta(500);
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           .astro {
//             animation: 5s linear infinite updown;
//           }

//           @keyframes updown {
//             0% { transform: translateY(-40px); }
//             50% { transform: translateY(40px); }
//             100% { transform: translateY(-40px); }
//           }
//         `}
//       </style>

//       <section className="bg-[url(../assets/images/banner-bg.png)] bg-no-repeat bg-cover w-full h-[650px] relative z-10 text-white mb-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
//         {/* Left Side */}
//         <div className="text-center md:text-left md:max-w-[calc(100%-600px)] w-full relative items-center justify-center mt-10 md:mt-14 p-6 md:p-20">
//           <div className="head p-4 lg:border border-white rounded-md mb-5 hover:bg-white hover:text-black hover:border-4 hover:border-black transition-all duration-200">
//             <h3 className="text-3xl md:text-5xl font-bold">Welcome to my Portfolio</h3>
//           </div>

//           <h1 className="text-xl md:text-3xl md:w-f">
//             {"Hi, I'm Kartik Sethi, a "}
//             <span className="text-yellow-400">{text}</span>
//           </h1>
//           <p className="mt-3 text-sm md:text-base">About Myself</p>
//         </div>

//         {/* Right Side */}
//         <div className="hidden md:flex absolute md:relative w-[250px] md:w-[400px] lg:w-[500px] right-0 bottom-8 md:bottom-14 md:top-8 md:right-0">
//           <img
//             src="../assets/images/header-img.svg"
//             alt="Header Image"
//             className="astro md:block md:border-white md:border-3 w-full max-h-[200px] md:max-h-[300px] lg:max-h-[500px]"
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
