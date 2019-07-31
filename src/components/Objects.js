import React, { Component } from 'react'
import objectsDb from './objectsDb'
import './Objects.css'

export default class Objects extends Component {
    renderObjects = () => {
        return (
            objectsDb.map(object => {
                return (
                    <div
                        ref={div => this.carousel = div}
                        key={object.title}
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