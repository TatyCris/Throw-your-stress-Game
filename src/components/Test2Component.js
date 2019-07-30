import React, { Component } from 'react'
import { TimelineLite, Power0, CSSPlugin, Back } from "gsap";
import './Test2Component.css'

export default class Test2Component extends Component {
    tl = new TimelineLite({ paused: true })
    tl2 = new TimelineLite({ paused: true })
    object = null
    hoopContainer = null
    hoopTween = null
    output = null

    play = true

    componentDidMount() {
        const target = this.hoopContainer.getBoundingClientRect() 
        const object = this.object.getBoundingClientRect()
        const targetCenterTop = target.top + target.height/2
        const objectCenterTop = object.top + object.height/2
        const targetCenterY = targetCenterTop - objectCenterTop

        this.tl
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

        this.tl2
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
            this.tl.play()
        }
    }

    throw = () => {
        CSSPlugin.useSVGTransformAttr = true;

        if (this.play) {
            this.tl2.play()
            this.tl.pause()
            this.play = false

            const objectWidth = this.object.getBoundingClientRect().width
            const targetWidth = this.hoopContainer.getBoundingClientRect().width
            const objectCenter = this.object.getBoundingClientRect().x + objectWidth / 2
            const targetCenter = this.hoopContainer.getBoundingClientRect().x + targetWidth / 2
            const ring = targetWidth / (6 * 2)

            console.log('variables', objectWidth, targetWidth, objectCenter, targetCenter, ring)

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
    }

    tryAgain = () => {
        if (!this.play) {
            this.tl2.reverse()
            this.tl.restart()
            this.play = true
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
                            alt="basketball hoop"
                            className="basketball-hoop"
                            ref={img => this.hoopContainer = img}
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
                <div>
                    <p ref={p => this.output = p}></p>
                </div>
            </div>
        )
    }
}
