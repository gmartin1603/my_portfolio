import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'


function Project({title, image}) {
    return (
            <Link to={'/'+title} className="project__link" >
        <div className="project">
                <div className="project__title">
                    <h2>{title}</h2>
                    <p>Click for project overview</p>
                </div>
            <img src={image} alt=""/>
        </div>
            </Link>
        
    );
}

export default Project;