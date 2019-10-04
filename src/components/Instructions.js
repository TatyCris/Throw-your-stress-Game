import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Instructions.css'

export default class Instruction extends Component {
    render() {
        return (
            <div className="text-container">
                <p>The goal of the game is to <span className="green-text">relieve your stress!</span></p>
                <p>You will have to select the items that cause you stress and throw them against the target, the closer to the center you hit, the higher score you get.</p>
                <p>By the time you reach your high score, your stress will be gone and you will get a reward for it!</p>
                <p className="green-text">Good luck!!</p>
                <Link to={'/'}><button className="button" onClick={this.onClick}>Go back</button></Link>
            </div >
        )
    }
};