import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Hello I'm</h5>
        <h2>Samuel Petrucci</h2>
        <h5 className='text-light'>FullStack Dev</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header