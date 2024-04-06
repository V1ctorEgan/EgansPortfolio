import React from 'react';
// import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
// import Details from './components/Details';

function App(){
    return (
        <div >
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        {/* <Details /> */}
        </div>)


}

export default App;