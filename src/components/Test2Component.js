import React, { Component } from 'react'
import { TimelineLite, Power0, CSSPlugin, Back } from "gsap";
import './Test2Component.css'

export default class Test2Component extends Component {
    // state = {
    //     play: true
    // }

    tl = new TimelineLite({ paused: true })
    tl2 = new TimelineLite()
    object = null
    hoopContainer = null
    hoopTween = null

    play = true

    componentDidMount() {
        // tl.from(element, 1, { left: -100 })    //tween element's left from -100
        //     .to(element, 1, { top: 50 })    //then tween element's "top" to 50
        //     .set(element, { opacity: 0 })    //then set element's opacity to 0.5 immediately
        //     .call(otherFunction)    //then call otherFunction()
        //     .staggerTo([element1, element2, element3], 1.5, { rotation: 45 }, 0.25)

        this.tl
            .fromTo(this.object, 1,
                {
                    x: -200
                },
                {
                    x: 200,
                    delay: 0.3,
                    repeatDelay: 0,
                    repeat: -1,
                    ease: Power0.easeIn,
                    yoyo: true
                })
            .seek(1)
    }

    play = () => {
        if (this.play) {
            this.tl.play()
        }
    }

    throw = () => {
        CSSPlugin.useSVGTransformAttr = true;

        if (this.play) {
            this.tl2
                // .fromTo(this.object, 1,
                //     {
                //         y: 0
                //     },
                //     {
                //         y: -400,
                //         rotation: 720,
                //     })
                .to(this.object, 1, {
                    y: -350,
                    rotation: 720,
                    scaleX: 0.5, scaleY: 0.5,
                    ease: Back.easeOut.config(3.5)
                })
            this.tl2.play()
            this.tl.pause()
            this.play = false
        }
    }

    tryAgain = () => {
        if (!this.play) {
            this.tl.restart()
            this.tl2.reverse()
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
                <div className="botton">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                        alt=""
                        className="basket-object"
                        ref={img => this.object = img}
                        onClick={this.throw}
                    />
                </div>
            </div>
        )
    }
}
