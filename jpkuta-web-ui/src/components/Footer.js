import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

  return (
    <div className='footer'>
        <div className='socialMedia'>
            {" "}
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon>
              <Link to={'https://www.linkedin.com/in/justin-kuta/'} />
            </LinkedInIcon>
            </div>
        <p> &copy; {year} jpkuta.github.io</p>
    </div>
  )
}

export default Footer