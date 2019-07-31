import React, { Component } from 'react'
import objectsDb from './objectsDb'
import './Objects.css'

export default class Objects extends Component {
    renderObjects = () => {
        return (
            objectsDb.map((object, i) => {
                return (
                    <div
                        ref={div => this.carousel = div}
                        key={object.i}
                        className="imageContainer"
                    >
                        <img
                            src={object.img}
                            alt={object.title}
                            className="objectImage"
                            ref={div => this.image = div}
                        />
                    </div>
                )
            })
        )
    }

    render() {
        return this.renderObjects()
    }
}