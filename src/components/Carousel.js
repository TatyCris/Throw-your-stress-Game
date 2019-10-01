import React, { Component } from 'react'
import { TweenLite } from "gsap"
import objectsDB from './objectsDb'
import '../style/Carousel.css'
import iconDown from '../icons/down-arrow.png'
import iconUp from '../icons/up-arrow.png'

export default class Carousel extends Component {
    state = {
        images: objectsDB,
        nextControllerActive: true,
        prevControllerActive: false
    }

    itemsList = null
    imageRef = null
    itemsContainer = null

    images = objectsDB.map(image => {
        return image.img
    })    

    animateCarousel = (control) => {
        let offset = null
        const img = this.imageRef.getBoundingClientRect()
        const items = this.itemsList.getBoundingClientRect()
        const container = this.itemsContainer.getBoundingClientRect() 
        const nSlides = Math.floor(container.height/img.height - 1)

        if (control === 'next') {
            this.setState({
                prevControllerActive: true
            })
            if (items.bottom <= container.bottom + nSlides * img.height) { 
                offset = "-=" + (items.bottom - container.bottom)
                this.setState({
                    nextControllerActive: false
                })
            } else {
                offset = "-=" + nSlides * img.height
            }
        }
        if (control === 'prev') {
            this.setState({
                nextControllerActive: true
            })
            if (items.top >= container.top - nSlides * img.height) { 
                offset = "+=" + (container.top - items.top)

                this.setState({
                    prevControllerActive: false
                })
            } else {
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
        const controllerNextActive = !this.state.nextControllerActive ? 'unclicable' : 'clicable'
        const controllerPrevActive = !this.state.prevControllerActive ? 'unclicable' : 'clicable'
        return (
            <div className="carousel-container">
                <img className={`carousel-controls ${controllerPrevActive}`} src={iconUp} onClick={this.prevSlide} />
                <div className="carousel-items-container" ref={div => this.itemsContainer = div}>
                    {this.renderImages()}
                </div>
                <img className={`carousel-controls ${controllerNextActive}`} src={iconDown} onClick={this.nextSlide} />
            </div>
        )
    }
}