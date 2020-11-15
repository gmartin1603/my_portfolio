import React from 'react';
import './Landing.css'
import Logo from '../Images/logo_transparent.png'


function Landing(props) {
    return (
        <div className="landing">
            <div className="landing__tint">
                <div className="landing__images">
                <img src={Logo} alt="logo"/>
                <img src='https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/123789873_10223826723993416_1285154283843763912_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=UH8hmLWBlkgAX999WCU&_nc_ht=scontent-den4-1.xx&oh=1c91b0c4a54eea01eeeb227aba61d467&oe=5FD6DDB6' alt="George Martin"/>
                </div>
                <div className="landing__text">
                <h2>Hi, I'm George Martin and I'm a Web Developer</h2>
                </div>
            </div>
        </div>
    );
}

export default Landing;