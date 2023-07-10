import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {GiThorHammer} from 'react-icons/gi'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'
import {GiBurningBook} from 'react-icons/gi'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserTie/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiThorHammer/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#porfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiBurningBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillPhoneVibrateFill/></a>
    </nav>
  )
}

export default Nav