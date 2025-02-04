import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';  
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import About from './About/About.jsx';
import Footer from './Footer.jsx';
import Contact from './Contact/Contact.jsx';
import Projects from './Projects/Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>     
     <BrowserRouter>  
     <Navbar className="w-full"/>
    <Routes>
    <Route path='/' element={<App/>}/>
 
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/projects' element={<Projects/>}/>
    </Routes>
  
        <Footer/>
    
 
    </BrowserRouter>
      
  </StrictMode>,
)
