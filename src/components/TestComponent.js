import React, { Component } from 'react'
import { 
    // Tween, Timeline, 
    TweenLite } from 'gsap/all';

export default class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.test = React.createRef()
    }

    
    // TweenComponent = () => (
    //     <Tween from={{ x: '100px', rotation: -360 }}>
    //         <div>This element gets tweened</div>
    //     </Tween>
    // );
    
    // TimelineComponent = () => (
    //     <Timeline
    //         target={
    //             <div>Target element which will be visible and gets tweened</div>
    //         }
    //     >
    //         <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
    //         <Tween to={{ x: '50px' }} />
    //     </Timeline>
    // );

    test = React.createRef()
    tween = null

    componentDidMount() {
        this.tween = TweenLite.to(this.test, 1, {x: 100, y: 100})
    }

    render() {
        return (
            <div ref={div => this.test = div}>
                {/* {this.TimelineComponent}
                {this.TweenComponent} */}
                hola mi amor
            </div>
        )
    }
}