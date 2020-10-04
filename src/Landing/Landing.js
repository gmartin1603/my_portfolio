import React from 'react';
import './Landing.css'
import Logo from '../Images/logo_transparent.png'
import george from '../Images/me.jpg'

function Landing(props) {
    return (
        <div className="landing">
            <div className="landing__tint">
                <div className="landing__images">
                <img src={Logo} alt="logo"/>
                <img src={george} alt="George Martin"/>
                </div>
                <div className="landing__text">
                <h2>Hi, I'm George Martin and I'm a Web Developer</h2>
                </div>
            </div>

        </div>
    );
}

export default Landing;