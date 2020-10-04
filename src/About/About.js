import React from 'react';
import './About.css'
import aboutPic from '../Profile_pic.jpg'

function About(props) {
    return (
        <div className="about">
            <div className="about__tint">
            <div className="about__content">
                <div className="about__image">
                    <img src={aboutPic} alt="George"/>
                    <p>My lovely fiancée Hallie and I</p>
                </div>
                <div className="about__text">
                    <p>
                        Hi there, I'm George Martin
                        <br/>
                        I am a self taught Developer based in Hiawatha, IA..
                        <br/>
                        Since the begining 2020 I've learned how to create 
                        appealing, usable UI designs and applications. As well 
                        as getting some experience with backend technologies! 
                        Much of the knowledge I've gained was through the Clever Proggrammer, 
                        Profit with JavaScript course. As well as other Internet based mediums. 
                        <br/>
                        My work ethic was learned growing up on a farm in eastern Iowa and this begining is brought into everything
                        I do. This and the rest of my background gives me a unique perspective to problems.
                    </p>
                    <p>
                        Through my time learning to code and about computers in general 
                        my passion for it has only grown. I truly believe this is my 
                        lifes calling! 
                    </p>
                </div>
                <div className="about__links">
            </div>
            </div>
            </div>
        </div>
    );
}

export default About;