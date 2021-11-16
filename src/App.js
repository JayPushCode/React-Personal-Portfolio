import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';




function App() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://use.fontawesome.com/releases/v5.15.3/js/all.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div>
      <div> <Header /> </div>
      <div> <Navbar /> </div>

          <About />

          <Experience />
  
          <Education />
    
          <Skills />
   
          <Projects />
   
          <Awards />
      

     
      <div> <Footer /> </div>
    </div>
  );
}

export default App;
