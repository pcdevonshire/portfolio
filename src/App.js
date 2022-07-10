import React from 'react';
import Nav from './Nav.js';
import Name from './Name.js';
import About from './About.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './App.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Name />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
