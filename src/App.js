import React, { Component } from 'react'
// import { Route } from "react-router-dom"
// import TestComponent from './components/TestComponent'
import Test2Component from './components/Test2Component'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main className="App-main">
          {/* <TestComponent /> */}
          <Test2Component />
          {/* <Route exact path="/" component={EventsContainer} /> */}
        </main>
      </div>
    )
  }
}