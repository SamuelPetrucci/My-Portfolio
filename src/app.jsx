import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/Footer.jsx'

function app() {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
    
    

  )
}

export default app