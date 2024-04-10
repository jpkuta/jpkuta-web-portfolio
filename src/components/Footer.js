import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import AlarmIcon from '@mui/icons-material/Alarm';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

  return (
    <div className='footer'>
        <div className='socialMedia'>
            {" "}
            <Link to={'https://www.linkedin.com/in/justin-kuta/'} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon/>
            </Link>  
            <Link to={'https://www.instagram.com/jpkuta/'} target="_blank" rel="noopener noreferrer">
              <InstagramIcon/>
            </Link>  
            <Link to={'https://youtube.com/@jpkuta?si=XpIG7F0xiFoS9w-U'} target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </Link>
            <Link to={'https://www.tiktok.com/@jpkuta'} target="_blank" rel="noopener noreferrer">
              <AlarmIcon/>
            </Link>                   
          </div>
        <p> &copy; {year} jpkuta.github.io</p>
    </div>
  )
}

export default Footer