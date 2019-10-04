import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TimelineLite, Power0, CSSPlugin, Back } from "gsap"
import Score from './Score'
import { addScore, setScore, addTries, setTries } from '../actions/game'
import Carousel from './Carousel'
import hitImage from '../images/hit-pidgeon.png'
import ModalContainer from './ModalContainer'
import crossIcon from '../images/cross-icon.png'
import '../style/Game.css'

class Game extends Component {
    state = {
        selectedObject: '',
        hit: false,
        play: false,
        showTutorial: true,
        openModal: false,
        modalTitle: '',
        modalId: '',
        modalType: '',
        modalCloseButton: true,
        modalClose: false
    }

    tlObject = new TimelineLite({ paused: true })
    tl2Object = new TimelineLite({ paused: true, onComplete: () => this.setState({ hit: true }) })
    object = null
    target = null
    hoopTween = null
    hitRef = null
    hitTarget = true

    componentDidMount() {
        this.showModal('tutorial1', 'tutorial', '', false)

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
        if ((prevProps.score !== this.props.score) && this.props.score >= 15) {
            if (this.props.score >= 15) {
                setTimeout(() => {
                    this.showModal('giphy', 'giphy', 'You win!!  No more stress!!', true)
                    this.props.setScore(0)
                    this.props.setTries(0)
                }, 2000)
            }
        }
    }

    showModal = (id, type, title, button) => {
        if (type === 'tutorial') {
            if (this.state.showTutorial) {
                this.setState({
                    openModal: true,
                    modalId: id,
                    modalType: type,
                    modalTitle: title,
                    modalCloseButton: button
                })
            } else {
                return null
            }
        } else {
            this.setState({
                openModal: true,
                modalId: id,
                modalType: type,
                modalTitle: title,
                modalCloseButton: button
            })
        }
    }

    hideModal = () => {
        this.setState({ openModal: false })
    }

    throw = () => {
        CSSPlugin.useSVGTransformAttr = true;

        if (this.state.play) {
            this.tl2Object.play()
            this.tlObject.pause()
            this.whereIsTheObjectX()
            this.props.addTries(1)
            this.hideModal()
        }
        this.setState({
            play: false
        })
        this.showModal('tutorial3', 'tutorial', '', false)
    }

    animateHit = () => {
        if (this.hitTarget) {
            this.setState({
                selectedObject: hitImage
            })
            this.tl2Object
                .to(this.object, 2, {
                    x: 300,
                    y: -500,
                    onComplete: () => this.hitComplete()
                })
        }
    }

    hitComplete = () => {
        this.tl2Object.seek(-3).reverse()
        this.setState({
            selectedObject: crossIcon,
        })
        this.showModal('tutorial1', 'tutorial', '', false)
    }

    showTutorialButton = (_boolean) => {
        if (_boolean) {
            return <button className="end-button" onClick={() => {
                this.setState({
                    showTutorial: false,
                    openModal: false
                })
            }}>Hide Tutorial</button>
        } else {
            return <button className="end-button" onClick={() => {
                this.setState({
                    showTutorial: true,
                    openModal: true
                })
            }}>Show Tutorial</button>
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
            this.hitTarget = true;
            return this.props.addScore(7)
        }
        if (objectCenter > targetCenter - ring && objectCenter < targetCenter + ring) {
            this.hitTarget = true;
            return this.props.addScore(6)
        }
        if (objectCenter > targetCenter - (2 * ring) && objectCenter < targetCenter + (2 * ring)) {
            this.hitTarget = true;
            return this.props.addScore(5)
        }
        if (objectCenter > targetCenter - (3 * ring) && objectCenter < targetCenter + (3 * ring)) {
            this.hitTarget = true;
            return this.props.addScore(4)
        }
        if (objectCenter > targetCenter - (4 * ring) && objectCenter < targetCenter + (4 * ring)) {
            this.hitTarget = true;
            return this.props.addScore(3)
        }
        if (objectCenter > targetCenter - (5 * ring) && objectCenter < targetCenter + (5 * ring)) {
            this.hitTarget = true;
            return this.props.addScore(2)
        }
        if (objectCenter > targetCenter - (6 * ring) && objectCenter < targetCenter + (6 * ring)) {
            this.hitTarget = true;
            return this.props.addScore(1)
        }
        else {
            // this.props.addScore(-1)
            return this.props.addScore(0)
        }
    }

    handleObjectClick = (img) => {
        this.setState({
            selectedObject: img,
            play: true,
        })
        this.hideModal()
        this.tlObject.play()
        this.showModal('tutorial2', 'tutorial', '', false)
    }

    render() {

        return (
            <div className="container">
                <div className="top">
                    <div className="controls">
                        {this.state.play ?
                            <button
                                className="throw"
                                onClick={this.throw}
                            >Throw</button> :
                            <button className="disabled"></button>
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
                <div className="bottom">
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
                <div className="end-buttons-container">
                    {this.showTutorialButton(this.state.showTutorial)}
                    <button className="end-button"
                        onClick={() => {
                            this.props.setScore(0)
                            this.props.setTries(0)
                        }}>Restart</button>
                    <Link to={'/'}><button className="end-button" onClick={this.onClick}>MENU</button></Link>
                </div>
                <ModalContainer
                    openModal={this.state.openModal}
                    hideModal={this.hideModal}
                    title={this.state.modalTitle}
                    id={this.state.modalId}
                    type={this.state.modalType}
                    closeButton={this.state.modalCloseButton}
                    close={this.state.modalClose}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        tries: state.tries,
    }
}

export default connect(mapStateToProps, { addScore, setScore, addTries, setTries })(Game)