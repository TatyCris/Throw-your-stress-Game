import React, { Component } from 'react'
// import { Route } from "react-router-dom"
// import Test2Component from './components/Test2Component'
import Carousel from './components/Carousel';
import './App.css';
// import ObjectsContainer from './components/ObjectsContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main className="App-main">
          {/* <Test2Component /> */}
          {/* <ObjectsContainer /> */}
          <Carousel />
          {/* <Route exact path="/" component={EventsContainer} /> */}
        </main>
      </div>
    )
  }
}