import React, { Component } from 'react';
import '../style/Score.css';

export default class Score extends Component {

    render() {
        const goal = 15
        const divWidth = { width: this.props.score * 100 / goal + '%' }

        return (
            <div>
                <p className="points">Score: {this.props.score} Points</p>
                <div className='scoreBarContainer'>
                    <div className='scoreBar'>
                        <div className='progress' style={divWidth} ></div>
                    </div>
                </div>
            </div>
        )
    }
}