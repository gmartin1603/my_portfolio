import React from 'react';
import Project from '../Project/Project';
import Amazon from '../Images/Amazon_Clone.png'
import toolbar from '../Images/Responsive_Toolbar.png'
import spotify from '../Images/Spotify_Clone.png'
import meal from '../Images/meal_planner.png'
import jsPlayground from '../Images/JSPlayground.png'
import netflix from '../Images/Netflix-clone.png'
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
                <Project title="Netflix Clone" image={netflix}/>
                <Project title="JS Playground" image={jsPlayground}/>
                <Project title="Spotify Clone" image={spotify}/>
                <Project title="Meal Planner" image={meal}/>
            </div>
        </div>
    );
}

export default Projects;