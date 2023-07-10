import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#"  className='footer__logo'>Samuel Petrucci</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>

      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/samuel-petrucci-51360b225/" target='_blank'><BsLinkedin/></a>
        <a href="https://GitHub.com/SamuelPetrucci" target='_blank'><BsGithub/></a>

      </div>


    </footer>
  )
}

export default Footer