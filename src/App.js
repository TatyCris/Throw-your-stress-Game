import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Game from './components/Game'
import './style/App.css';
import InitialPage from './components/HomePage';
import Instructions from './components/Instructions';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main className="App-main">
          <Route exact path="/" component={InitialPage} />
          <Route exact path="/instructions" component={Instructions} />
          <Route exact path="/game" component={Game} />
        </main>
      </div>
    )
  }
}