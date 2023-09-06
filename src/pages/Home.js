import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Vishnu</h2>
        <div className="prompt">
          {/* <p>A software developer with a passion for learning and creating.</p> */}
          <p>Motivated and enthusiastic graduate and aspiring developer with a strong desire to contribute innovative software solutions. </p>
        </div>
        <div className='ico'>
          <Link to="https://linkedin.com/in/vishnu3011" target="_blank">
            <LinkedInIcon/>
          </Link>
          <Link to="mailto: sajjalavishnuvardhanreddy3011@gmail.com" target="_blank">
            <EmailIcon />
          </Link>
          <Link to="https://github.com/VishnuReddy3011" target="_blank">
            <GitHubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              React JS, HTML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, C++, SQL</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
