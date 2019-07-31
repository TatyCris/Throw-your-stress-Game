import React, { Component } from 'react'
import { TweenLite } from "gsap"
import objectsDB from './objectsDb'
import './Carousel.css'

export default class Carousel extends Component {
    // tween = TweenLite
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
        const itemsContainerRect = this.itemsContainer.getBoundingClientRect()
        const itemsListRect = this.itemsList.getBoundingClientRect()

        // console.log('itemsListRect', itemsListRect.bottom, itemsListRect)
        // console.log('itemsContainerRect', itemsContainerRect.top)

        const nSlides = 2
        const offsetBottom = itemsListRect.bottom - itemsContainerRect.bottom
        const itemListY = itemsListRect.top
        const heightSlides = nSlides * (this.imageRef.getBoundingClientRect().height + 10)
        // console.log('imageheight', this.imageRef.getBoundingClientRect().height)
        // console.log('heighSlides', heightSlides)
        let offset = null
        if (control === 'next') {
            // if (itemsListRect.bottom + heightSlides > itemsContainerRect.bottom) {
            //     console.log('NEXT', itemsListRect, itemsContainerRect)
            //     offset = itemsContainerRect.bottom
            // } else {
            // }

            offset = "-=" + heightSlides
        }
        if (control === 'prev') {
            // console.log('PREV', itemsListRect, itemsContainerRect)
            offset = "+=" + heightSlides
        }
        // const offset = control === 'next' ? (itemsContainerRect.top - heightSlides) : (itemsContainerRect.top + heightSlides)
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
                return <li onClick={() => this.props.handleClick(image.img)}>
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
