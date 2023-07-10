import React from 'react';
import './contact.css';
import { GrMail } from 'react-icons/gr';
import { BsFillPhoneFill } from 'react-icons/bs';


const Contact = () => {

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <GrMail className='contact__option-icon'/>
            <h4>Email</h4>
            <small>petruccis@my.easternct.edu</small>
            <a href="mailto:petruccis@my.easternct.edu" target='_blank' rel='noopener noreferrer'>Send an Email</a>
          </article>
          <article className='contact__option'>
            <BsFillPhoneFill className='contact__option-icon'/>
            <h4>Mobile</h4>
            <small>(1+) 860.705.3417</small>
          </article>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;
