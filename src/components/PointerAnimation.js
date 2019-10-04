import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import pointer from '../icons/pointer.png'
import '../style/PointerAnimation.css'

class PointerAnimation extends Component {

    pointerContainer = null;
    pointerTween = new TimelineLite({ paused: true });

    componentDidMount() {
        this.pointerTween
            .to(this.pointerContainer, 0.4, {
                x: -10,
                y: 10,
                repeatDelay: 0,
                repeat: -1,
                yoyo: true
            })
            .play()
    }

    render() {
        return <img
            src={pointer}
            alt="pointer"
            className="pointer"
            ref={img => this.pointerContainer = img}
        />
    }
}

export default PointerAnimation;
