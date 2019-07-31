import React, { Component } from 'react'
import { TimelineLite, Power0, CSSPlugin, Back } from "gsap";
import './Test2Component.css'

export default class Test2Component extends Component {
    tlObject = new TimelineLite({ paused: true })
    tl2Object = new TimelineLite({ paused: true })
    object = null
    target = null
    hoopTween = null

    play = true

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

    play = () => {
        if (this.play) {
            this.tlObject.play()
        }
    }

    throw = () => {
        CSSPlugin.useSVGTransformAttr = true;

        if (this.play) {
            this.tl2Object.play()
            this.tlObject.pause()
            this.play = false
            this.whereIsTheObjectX()
        }
    }

    tryAgain = () => {
        if (!this.play) {
            this.tl2Object.reverse()
            this.tlObject.restart()
            this.play = true
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
            return console.log('perfe')
        }
        if (objectCenter > targetCenter - ring && objectCenter < targetCenter + ring) {
            return console.log('primero')
        }
        if (objectCenter > targetCenter - (2 * ring) && objectCenter < targetCenter + (2 * ring)) {
            return console.log('segundo')
        }
        if (objectCenter > targetCenter - (3 * ring) && objectCenter < targetCenter + (3 * ring)) {
            return console.log('tercero')
        }
        if (objectCenter > targetCenter - (4 * ring) && objectCenter < targetCenter + (4 * ring)) {
            return console.log('quarto')
        }
        if (objectCenter > targetCenter - (5 * ring) && objectCenter < targetCenter + (5 * ring)) {
            return console.log('quinto')
        }
        if (objectCenter > targetCenter - (6 * ring) && objectCenter < targetCenter + (6 * ring)) {
            return console.log('sexto')
        }
        else {
            return console.log('fuera!')
        }
    }

    render() {
        return (
            <div className="container">
                <div className="top">
                    <div className="controls">
                        <button
                            className="play"
                            onClick={this.play}
                        >Play</button>
                        <button
                            className="try-again"
                            onClick={this.tryAgain}
                        >Try again</button>
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
                        className="basket-object"
                        ref={div => this.object = div}
                        onClick={this.throw}
                    >
                        +
                    </div>
                    {/* <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                        alt=""
                        className="basket-object"
                        ref={img => this.object = img}
                        onClick={this.throw}
                    /> */}
                </div>
            </div>
        )
    }
}
