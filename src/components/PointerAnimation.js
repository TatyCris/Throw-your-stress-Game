import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import pointer from '../icons/pointer.png'
import '../style/PointerAnimation.css'

class PointerAnimation extends Component {

    pointerContainer = null;
    pointerTween = new TimelineLite({ paused: true });

    componentDidMount() {
        this.pointerTween
            .to(this.pointerContainer, 0.4, this.renderAnimation())
            .play()
    }

    renderAnimation = () => {
        switch (this.props.id) {
            case 'tutorial1':
                return (
                    {
                        x: -10,
                        y: 10,
                        repeatDelay: 0,
                        repeat: -1,
                        yoyo: true
                    }
                )
            case 'tutorial2':
                return (
                    {
                        x: -20,
                        repeatDelay: 0,
                        repeat: -1,
                        yoyo: true
                    }
                )
            case 'tutorial3':
                return (
                    {
                        x: -10,
                        y: 10,
                        repeatDelay: 0,
                        repeat: -1,
                        yoyo: true
                    }
                )
            default:
                break;
        }
    }

    render() {
        return <img
            src={pointer}
            alt="pointer"
            className={`pointer ${this.props.id}`}
            ref={img => this.pointerContainer = img}
        />
    }
}

export default PointerAnimation;
