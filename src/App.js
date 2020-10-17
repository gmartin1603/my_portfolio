import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import FullProject from './FullProject/FullProject';
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Tech from './Tech/Tech';
import Amazon from './Images/Amazon_Clone.png'
import toolbar from './Images/Responsive_Toolbar.png'
import spotify from './Images/Spotify_Clone.png'
import meal from './Images/meal_planner.png'
import About from './About/About';
import ToggleButton from './ToggleButton/ToggleButton';
import jsPlayground from './Images/JSPlayground.png'
import netflix from './Images/Netflix-clone.png'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Amazon Clone">
            <FullProject 
            title="Amazon Clone" 
            gif={Amazon}
            url="https://clone-8b1b2.firebaseapp.com/"
            description="This Amazon.com clone built with React.js features account creation and sign in through firebase auth, payment simulation with stripe and 
            Order saving using cloud firestore. This app also utilizes React context API for cart and auth tracking."
            />
          </Route>
          <Route path="/Spotify Clone">
            <FullProject 
            title="Spotify Clone"
            gif={spotify}
            url="https://spotify-clone-647d8.firebaseapp.com/#"
            description="This Spotify clone built with react utilizes the Spotify API for authorization and playlist fetching. 
            Currently has no play functionallity. React context API also utilized."
            />
          </Route>
          <Route path="/Responsive Toolbar">
            <FullProject 
            title="Responsive Toolbar"
            gif={toolbar}
            url="https://toolbar-a972f.firebaseapp.com/"
            description="This React component is fully mobile responsive. The nav links are replaced by a hamburger icon with animated side drawer on mobile devices."
            />
          </Route>
          <Route path="/JS Playground">
            <FullProject 
            title="JavaScript Playground"
            gif={jsPlayground}
            url="https://js-playground-f718a.web.app/"
            description="This one I built for Clever Programmers, Profit with JavaScript course. It is traditional HTML, CSS, and JavaScript.
            I always tell people how much fun it was to build this. Building this introduced me to flex box, among other CSS tricks, as well as 
            helping me understand API calls better."
            />
          </Route>
          <Route path="/Netflix Clone">
            <FullProject 
            title="Netflix Clone"
            gif={netflix}
            url="https://netflix-clone-398bb.web.app/"
            description="This React app gathers the movie images and title from tmdb api. Still working on getting the movie trailer to play on click."
            />
          </Route>
          <Route path="/Meal Planner">
            <FullProject 
            title="Meal Planner"
            gif={meal}
            url="https://meal-planner-7a232.web.app/"
            description="This app is one of my own design. Its still under construction but feel free to create an account and save a recipe. 
            the app will save your username and password using firebase auth, and recipes using firebase cloud firestore. Not mobile responsive yet, just computers and tablets.
            thanks for looking!"
            />
          </Route>
          <Route path="/">
            <ToggleButton/>
            <Landing/>
            <Tech/>
            <Projects/>
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
