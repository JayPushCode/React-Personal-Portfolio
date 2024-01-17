import React, { useEffect} from 'react';

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
  
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js";
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
