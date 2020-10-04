import React from 'react';
import './Tech.css'

function Tech(props) {
    return (
        <div className="tech">
            <div className="tech__title">
                <h2>Technology Stack</h2>
            </div>
            <div className="tech__images">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" 
                alt="HTML"
                id="html5"/>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
                alt="CSS"/>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" 
                alt="JavaScript"/>
                <img 
                src="https://www.logolynx.com/images/logolynx/e1/e1d2fcf29877eb842ac100cbb3329119.png" 
                alt="React.js"/>
                <img 
                src="https://icon-library.com/images/nodejs-icon/nodejs-icon-25.jpg" 
                alt="Node.js"/>
                <img 
                src="https://firebase.google.com/images/brand-guidelines/logo-vertical.png?hl=sv" 
                alt="Firebase"/>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png" 
                alt="Python"/>
            </div>
        </div>
    );
}

export default Tech;