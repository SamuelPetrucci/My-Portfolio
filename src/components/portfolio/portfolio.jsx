import React from 'react'
import './portfolio.css'
import {GiPencilRuler} from 'react-icons/gi'

function portfolio() {
  return (
    <section id='portfolio'>
      

      <h2>Projects <GiPencilRuler/></h2>

<div className="container project__experience__containter">
    <div className="project__experience">
        <div className="experience__content">
                <article className='experience__details'>
                    
                    <div>
                        <h4> Forage JPM & Chase Software Engineering Virtual Experience </h4>
                        <p className='text-light'>
                        • Developed a strong understanding of the daily responsibilities of a software engineer,
                         including forking, cloning, and submitting tickets</p>
                        <p className='text-light'>
                        • Utilized a variety of technologies, such as React.js, Python, and 
                        data streaming/organization, to complete the program successfully
                        </p>
                    </div>
                </article>
                <article className='experience__details'>
                    <div>
                        <h4>Weather Chat-Bot</h4>
                        <p className='text-light'>
                        • Chat bot that utilizes GroupMe’s API allowing users in a group to perform various
                         commands that request weather data from the Open Weather Map API
                        </p>
                    </div>
                </article>
                <article className='experience__details'>
                    <div>
                        <h4>Stock Market Bot</h4>
                        <p className='text-light'>
                        • Using the YFinances API, I developed a web app that integrates with GroupMe as a frontend.
                         The app enables users within a group to access stock news, market earnings, summaries, and trading volume information
                        </p>
                    </div>
                </article>
                <article className='experience__details'>
                    <div>
                        <h4>Twitter-Bot</h4>
                        <p className='text-light'>
                        • Scraping Twitter for trending topics and threads, the app aims to gain a better understanding of what trends on the platform.</p>
                    </div>
                </article>
        </div>
    </div>
</div>

    </section>
  )
}

export default portfolio