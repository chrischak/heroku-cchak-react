import React, { Component } from 'react';
import Game from './Components/Game.js';
import Photo from './Components/Photo.js';
import ShoppingCart from './Components/ShoppingCart.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>Hello, I am Chris first time putting an applications on to heroku
          using react base javascripts</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Game />
        <ShoppingCart />
        <Photo />
      </div>
    );
  }
}

export default App;
