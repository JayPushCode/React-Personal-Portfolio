import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {
  return (
    <div>
      <div> <Header /> </div>
      <div> <Navbar /> </div>
      <Router>
        <Route exact path="/">
          <About />
        </Route>

      </Router>
      <div> <Footer /> </div>
    </div>
  );
}

export default App;
