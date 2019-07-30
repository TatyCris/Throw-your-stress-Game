import React, { Component } from 'react'
import { TimelineLite, Power0, CSSPlugin } from "gsap";

export default class Test2Component extends Component {
    state = {
        play: false
    }

    tl = new TimelineLite();
    directionBarContainer = null
    directionBarTween = null

    componentDidMount() {
        this.directionBarTween = new TimelineLite({ paused: true })
            .to(this.directionBarContainer, 1, {
                x: 200,
                delay: 0.3,
                repeatDelay: 0,
                repeat: -1,
                ease: Power0.easeIn,
                yoyo: true
            })
    }

    play = () => {
        this.directionBarTween.play()
        this.setState({ play: true })
    }

    throw = () => {
        CSSPlugin.useSVGTransformAttr = true;

        if (this.state.play) {
            this.directionBarTween.pause()
            this.tl.to(this.directionBarContainer, 1, { y: -500, rotation: 360, transformOrigin: "center" })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="controls">
                    <button
                        className="play-control"
                        onClick={this.play}
                    >Play</button>
                </div>
                <hr />
                <div className="bar">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                        alt=""
                        className="direction-bar"
                        ref={img => this.directionBarContainer = img}
                        onClick={this.throw}
                    />
                </div>
            </div>
        )
    }
}
