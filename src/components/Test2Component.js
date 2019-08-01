import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TimelineLite, Power0, CSSPlugin, Back, TweenLite } from "gsap"
import Score from './Score'
import { setScore, setTries } from '../actions/game'
import Carousel from './Carousel'
import './Test2Component.css'
import Objects from './ObjectsContainer';
import hitImage from '../images/hit-pidgeon.png'
import crossIcon from '../images/cross-icon.png'

class Test2Component extends Component {
    state = {
        selectedObject: '',
        hit: false,
        play: true
    }

    tlObject = new TimelineLite({ paused: true })
    tl2Object = new TimelineLite({ paused: true, onComplete: () => this.setState({ hit: true }) })
    object = null
    target = null
    hoopTween = null
    hitRef = null
    hitTarget = true

    // play = true

    componentDidMount() {
        const target = this.target.getBoundingClientRect()
        const object = this.object.getBoundingClientRect()
        const targetCenterTop = target.top + target.height / 2
        const objectCenterTop = object.top + object.height / 2
        const targetCenterY = targetCenterTop - objectCenterTop

        this.tlObject
            .fromTo(this.object, 1,
                {
                    y: 0,
                    x: -200
                },
                {
                    x: 200,
                    repeatDelay: 0,
                    repeat: -1,
                    ease: Power0.easeIn,
                    yoyo: true
                })
            .seek(0.5)

        this.tl2Object
            .fromTo(this.object, 1,
                {
                    y: 0
                },
                {
                    y: targetCenterY,
                    rotation: 720,
                    scaleX: 0.5, scaleY: 0.5,
                    ease: Back.easeOut.config(3.5)
                })
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.hit !== this.state.hit) && this.state.hit) {
            this.animateHit()
        }
    }

    playGame = () => {
        if (this.state.play) {
            this.tlObject.play()
        }
    }

    throw = () => {
        CSSPlugin.useSVGTransformAttr = true;

        if (this.state.play) {
            this.tl2Object.play()
            this.tlObject.pause()
            this.whereIsTheObjectX()
            this.props.setTries(1)
            this.setState({
                play: false
            })
        }
    }

    tryAgain = () => {
        if (!this.state.play) {
            this.tl2Object.seek(-3).reverse()
            this.tlObject.restart()
            this.setState({
                play: true
            })
        }
    }

    whereIsTheObjectX = () => {
        const target = this.target.getBoundingClientRect()
        const object = this.object.getBoundingClientRect()
        const objectCenter = object.x + object.width / 2
        const targetCenter = target.x + target.width / 2
        const nRing = 6
        const ring = target.width / (nRing * 2)

        if (objectCenter === targetCenter) {
            this.props.setScore(7)
            this.hitTarget = true;
            return console.log('perfe')
        }
        if (objectCenter > targetCenter - ring && objectCenter < targetCenter + ring) {
            this.props.setScore(6)
            this.hitTarget = true;
            return console.log('primero')
        }
        if (objectCenter > targetCenter - (2 * ring) && objectCenter < targetCenter + (2 * ring)) {
            this.props.setScore(5)
            this.hitTarget = true;
            return console.log('segundo')
        }
        if (objectCenter > targetCenter - (3 * ring) && objectCenter < targetCenter + (3 * ring)) {
            this.props.setScore(4)
            this.hitTarget = true;
            return console.log('tercero')
        }
        if (objectCenter > targetCenter - (4 * ring) && objectCenter < targetCenter + (4 * ring)) {
            this.props.setScore(3)
            this.hitTarget = true;
            return console.log('quarto')
        }
        if (objectCenter > targetCenter - (5 * ring) && objectCenter < targetCenter + (5 * ring)) {
            this.props.setScore(2)
            this.hitTarget = true;
            return console.log('quinto')
        }
        if (objectCenter > targetCenter - (6 * ring) && objectCenter < targetCenter + (6 * ring)) {
            this.props.setScore(1)
            this.hitTarget = true;
            return console.log('sexto')
        }
        else {
            this.props.setScore(0)
            // this.props.setScore(-1)
            return console.log('fuera!')
        }
    }

    animateHit = () => {
        if (this.hitTarget) {
            this.setState({
                selectedObject: hitImage
            })
            this.tl2Object
                .to(this.object, 2, {
                    x: 200,
                    y: -50
                })
        }
    }

    handleObjectClick = (img) => {
        this.setState({
            selectedObject: img
        })
    }

    renderHit = () => {
        return <div
            className={this.state.hit ? 'hit active' : 'hit'}
            ref={div => this.hitRef = div}>
        </div>
    }

    render() {
        console.log(this.state.play)
        return (
            <div className="container">
                <div className="top">
                    <div className="controls">
                        {this.state.play ?
                            <button
                                className="play"
                                onClick={this.playGame}
                            >Play</button> :
                            <button
                                className="try-again"
                                onClick={this.tryAgain}
                            >Try again</button>
                        }
                    </div>
                    <div className="target">
                        <img
                            src="https://www.playsport.net/sites/playsport.ophea.net/files/ophea-files/icons/ophea-playsport-icons_target-games.png"
                            alt="target"
                            className="target"
                            ref={img => this.target = img}
                        />
                    </div>
                </div>
                <div className="bottom" onClick={this.throw}>
                    <div
                        style={{
                            backgroundImage: `url('${this.state.selectedObject || crossIcon}')`
                        }}
                        className="basket-object"
                        ref={img => this.object = img}
                    />
                    <Score score={this.props.score} />
                </div>
                <Carousel handleClick={this.handleObjectClick} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        tries: state.tries
    }
}

export default connect(mapStateToProps, { setScore, setTries })(Test2Component)
