import React from 'react'
import './about.css'
import ME from '../../assets/Me.png'
import {IoIosBuild} from 'react-icons/io'
import {GiGraduateCap} from 'react-icons/gi'
import {GiLaptop} from 'react-icons/gi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
       <h2>About Me</h2>
       
       
       
       <div className="container about__container">
        
        </div>

          <div className="about__content">
            <div className="about__cards">
            <article className='about__card'>
              <IoIosBuild className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working experience</small>
            </article>
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Graduation</h5>
              <small>Expected Graduation 2025</small>
            </article>
            <article className='about__card'>
              <GiLaptop className = 'about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years coding experience</small>
            </article>
          </div>
          
          <p className='about__me__desc'>
        I'm a passionate 3rd year computer science student with experience in back-end frameworks (Python/Java) 
        and front-end frameworks (ReactJS/HTML/CSS). I have a strong foundation and a hunger for learning new skills.
         Outside of academics, I enjoy gaming, traveling, and spending time at the beach with family and friends. 
         My goal is to make a significant impact in the tech industry, leveraging my skills and embracing new challenges along the way.
        </p>

        
        </div>
       


    </section>
  )
}

export default about