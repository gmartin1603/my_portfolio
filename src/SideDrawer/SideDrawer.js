import React from 'react';
import './SideDrawer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function SideDrawer({ open }) {
    let className = "sideDrawer"

    if (open) {
        className = "sideDrawer_open"
    }
    return (
        <div className={className}>
            <div className="sideDrawer__row">
                <EmailIcon/>
                <a href="mailto:georgemartin1603@yahoo.com">georgemartin1603@yahoo.com</a>
            </div>
            <div className="sideDrawer__row">
                <FacebookIcon/>
                <a href="https://www.facebook.com/constcountryCoder" target="_blank" rel="noopener noreferrer">Country Coder on Facebook</a>
            </div>
            <div className="sideDrawer__row">
                <InstagramIcon/>
                <a href="https://www.instagram.com/country_coder/?hl=en" target="_blank" rel="noopener noreferrer">country_coder on Instagram</a>
            </div>
            <div className="sideDrawer__row">
                <LinkedInIcon/>
                <a href="https://www.linkedin.com/in/george-martin-ab003b1b8/" target="_blank" rel="noopener noreferrer">George Martin on LinkedIn</a>
            </div>
            <div className="sideDrawer__row">
                <GitHubIcon/>
                <a href="https://github.com/gmartin1603">George Martin on GitHub</a>
            </div>
        </div>
    );
}

export default SideDrawer;