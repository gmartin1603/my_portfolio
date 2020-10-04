import React from 'react';
import './FullProject.css'

function FullProject({title, description, gif, url}) {
    return (
        <div className="fullProject">
            <div className="fullProject__title">
                <h1>
                {title}
                </h1>
            </div>
            <div className="fullProject__content">
                <div className="fullProject__description">
                    <p>
                    {description}
                    </p>
                </div>
                {url? 
                <div className="fullProject__url">
                    <p>Hosted at: 
                    <a href={url} target="_blank">
                    {url}
                    </a>
                    </p>
                </div> : ''
                }
                <div className="fullProject__gif">
                    <img src={gif} alt=""/> 
                </div>
            </div>
        </div>
    );
}

export default FullProject;