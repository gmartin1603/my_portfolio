import React from 'react';
import Project from '../Project/Project';
import Amazon from '../Amazon_Clone.png'
import toolbar from '../Responsive_Toolbar.png'
import spotify from '../Spotify_Clone.png'
import './Projects.css'

function Projects(props) {
    return (
        <div className="projects">
            <div className="projects__title">
            <h2>My Work</h2>
            </div>
            <div className="projects__list">
                <Project title="Amazon Clone" image={Amazon}/>
                <Project title="Responsive Toolbar" image={toolbar}/>
                <Project title="Spotify Clone" image={spotify}/>
            </div>
        </div>
    );
}

export default Projects;