import React, { Component } from 'react'
// import { Route } from "react-router-dom"
import Test2Component from './components/Test2Component'
import Score from './components/Score';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main className="App-main">
          <Test2Component />
          <Score />
          {/* <Route exact path="/" component={EventsContainer} /> */}
        </main>
      </div>
    )
  }
}