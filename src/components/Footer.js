import React from 'react';
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
            <LinkedInIcon>
              <Link to={'https://www.linkedin.com/in/justin-kuta/'} />
            </LinkedInIcon>
            </div>
        <p> &copy; {year} jpkuta.github.io</p>
    </div>
  )
}

export default Footer