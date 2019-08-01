import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import { Link } from 'react-router-dom'
import './InitialPage.css'

export default class InitialPage extends Component {
    sizes = ["small", "medium", "large"]
    bubbleContainer = this.screen
    startY = 250
    endY = -50

    // particles = new TimelineMax()
    bubble = null
    screen = null
    bubblesRef = []

    randomNumber = (min, max) => {
        return Math.floor(Math.random() * (1 + max - min) + min)
    }

    bubbleChild = () => {
        return "<div className='buble' ref={div => this.bubble = div}></div>"
    }

    // i = 0

    // for(let i = 0; i < 50; i++) {
    // sizeIndex = this.randomNumber(0, 2)
    // size = this.sizes[this.sizeIndex]
    // speed = (3 - this.sizeIndex)
    // this.screen.appendChild(this.bubbleChild)

    
    componentDidMount() {
        const sizeIndex = this.randomNumber(0, 2)
        // size = this.sizes[this.sizeIndex]
        const speed = (3 - sizeIndex)

        // for (let i = 0; i < 50; i++) {
        //     console.log('here', this.bubbles[i])
        //     this.particles = new TimelineMax()
        //         .set(this.bubbles[i], { y: this.startY, x: 300 }, 0)
        //         .to(this.bubbles[i], speed, {
        //             y: this.endY,
        //             x: this.randomNumber(0, 600),
        //             repeatDelay: Math.random() * 2,
        //             repeat: 500
        //         }, Math.random() * 2)
        // }
    }

    renderBubbles = () => {
        const bubbles = []
        // for (let i = 0; i < 50; i++) {
        //     const sizeIndex = this.randomNumber(0, 2)
        //     // const size = this.sizes[sizeIndex]
        //     const speed = (3 - sizeIndex)

        //     bubblesRef[i] = React.createRef()
        //     bubbles[i] = React.createElement('div', { className: "bubble", ref: bubblesRef[i] })
        // }
        // return bubbles;

        return (<div>
            {() => {
                for (let i = 0; i < 50; i++) {
                    const sizeIndex = this.randomNumber(0, 2)
                    // const size = this.sizes[sizeIndex]
                    const speed = (3 - sizeIndex)
        
                    this.bubblesRef[i] = React.createRef()
                    // bubbles[i] = React.createElement('div', { className: "bubble", ref: bubblesRef[i] })
                    return <div className="bubble" ref={this.bubblesRef[i]}></div>
                }
            }}
        </div>)
        
        // (() => {
        //         for (let i = 0; i < 50; i++) {
        //             const sizeIndex = this.randomNumber(0, 2)
        //             // const size = this.sizes[sizeIndex]
        //             const speed = (3 - sizeIndex)
        
        //             this.bubblesRef[i] = React.createRef()
        //             // bubbles[i] = React.createElement('div', { className: "bubble", ref: bubblesRef[i] })
        //             return <div className="bubble" ref={this.bubblesRef[i]}></div>
        //         }
        //     })

    }

    onClick = () => {
        return (
            <Link to={'/instructions'}>
            </Link>
        )
    }

    render() {
        return (
            <div className="buttons-container" ref={div => this.screen = div}>
                {this.renderBubbles()}
                <Link to={'/game'}><button className="button" onClick={this.onClick}>PLAY</button></Link>
                <Link to={'/instructions'}><button className="button" onClick={this.onClick}>HOW TO PLAY</button></Link>
            </div>
        )
    }
}
