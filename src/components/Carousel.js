import React, { Component } from 'react'
import { TweenLite } from "gsap"
import objectsDB from './objectsDb'
import '../style/Carousel.css'

export default class Carousel extends Component {
    itemsList = null
    imageRef = null
    itemsContainer = null

    images = objectsDB.map(image => {
        return image.img
    })

    state = {
        currentImageIndex: 0,
        images: objectsDB
    }

    animateCarousel = (control) => {
        let offset = null
        const nSlides = 2
        const img = this.imageRef.getBoundingClientRect()
        const items = this.itemsList.getBoundingClientRect()        

        if (control === 'next') {
            if (items.bottom === 686.1875) {
                offset = "-=" + img.height
            } 
            if (items.bottom > 686.1875) {
                offset = "-=" + nSlides * img.height
            }
        }
        if (control === 'prev') {
            if (items.top === 11.1875) {
                offset = "+=" + img.height
            }
            if (items.top < 11.1875) {
                offset = "+=" + nSlides * img.height
            }
        }
        if (offset) {
            TweenLite.to(this.itemsList, 1, {
                y: offset
            })
        }
    }

    prevSlide = (event) => {
        event.preventDefault()
        this.animateCarousel('prev')
    }

    nextSlide = (event) => {
        event.preventDefault()
        this.animateCarousel('next')
    }

    renderImages = () => {
        return <ul ref={ul => this.itemsList = ul}>
            {this.state.images.map((image, index) => {
                return <li key={image.title} onClick={() => this.props.handleClick(image.img)}>
                    <img
                        className="carousel-item"
                        ref={img => this.imageRef = img}
                        key={index}
                        src={image.img}
                        alt={image.title}
                    />
                </li>
            })}

        </ul>
    }

    render() {
        // const index = this.state.currentImageIndex
        return (
            <div className="carousel-container">
                <div className="carousel-controls" onClick={this.prevSlide}>{'<'}</div>
                <div className="carousel-items-container" ref={div => this.itemsContainer = div}>
                    {this.renderImages()}
                </div>
                <div className="carousel-controls" onClick={this.nextSlide}>{'>'}</div>
            </div>
        )
    }
}
