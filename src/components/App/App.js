import React, { Component } from 'react';
import './App.css';
import myPic from '../../images/headshot.JPG';
import CalculatorPic from '../../images/Calculator.png';
import ReadMePic from '../../images/ReadMe.png';
import ToDoPic from '../../images/ToDo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dustin Fedie</h1>
        </header>

        <div className="textSpot">
          <h2 className="headerEmail">dlfedie@gmail.com</h2>
          <img src={myPic} alt="Dustin" className="headshot" />
          <div>
            <a href="https://www.linkedin.com/in/dustin-fedie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <a href="https://github.com/dlfedie" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="bottomBox">
            <h3>Projects I've worked on:</h3>
            <p><a href="https://evening-atoll-19955.herokuapp.com/#/home" target="_blank" rel="noopener noreferrer">ReadMe:</a> a mobile-first app to track reading progress and friend recommendations. </p>
            <p><a href="https://mighty-fortress-03181.herokuapp.com/" target="_blank" rel="noopener noreferrer">Movie Collection:</a> a small web app to store movie info. </p>
            <p><a href="https://secure-retreat-26616.herokuapp.com/" target="_blank" rel="noopener noreferrer">To Do List:</a> a small web app to track tasks. </p>
            <p><a href="https://obscure-tor-27806.herokuapp.com/" target="_blank" rel="noopener noreferrer">Calculator:</a> one of my first projects of creating a server-side calculator. </p>
            <p>Note: these are all hosted on Heroku, so if they don't load right away, give it a moment to fire up the server!</p>
            {/* <img src={ReadMePic} alt="screenshot of ReadMe application" className="screenshots" />
            <img src={ToDoPic} alt="screenshot of ToDo application" className="screenshots" />
            <img src={CalculatorPic} alt="screenshot of Calculator application" className="screenshots" /> */}
          </div>
          <footer className="footer">&copy; Dustin Fedie, including photos</footer>
        </div>
      </div>
    );
  }
}

export default App;
