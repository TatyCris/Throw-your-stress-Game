import React, { Component } from 'react'
import '../style/Button.css'

export default class Button extends Component {
    render() {
        return (
            <button
                className={`button ${this.props.type}`}
                onClick={this.props.onclick}
            >
                {this.props.title}
            </button>
        )
    }
}