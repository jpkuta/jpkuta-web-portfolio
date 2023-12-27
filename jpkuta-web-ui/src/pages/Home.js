import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Justin Kuta</h2>
        <div className='prompt'>
          <p> Professionally, I am software developer with a passion for continuous learning and creating. <br/><br/>
          Outside of professional software develoment spend my time enjoying music, art, food and having a good times with my friends. Other hobbies of mine include biking, fishing and playing guitar.
          </p>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, MaterialUi, StyledComponents</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>.NET, NodeJS, Java, GraphQL, SQL</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span> C#, C++, Python, TypScript, Java  </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home