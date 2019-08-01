import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Test2Component from './components/Test2Component'
import './App.css';
import InitialPage from './components/InitialPage';
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
          <Route exact path="/game" component={Test2Component} />
        </main>
      </div>
    )
  }
}