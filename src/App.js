import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import FullProject from './FullProject/FullProject';
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Tech from './Tech/Tech';
import Amazon from './Amazon_Clone.png'
import toolbar from './Responsive_Toolbar.png'
import spotify from './Spotify_Clone.png'
import About from './About/About';
import ToggleButton from './ToggleButton/ToggleButton';

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
            url=""
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
