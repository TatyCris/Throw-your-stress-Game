import React, { Component } from 'react'
// import { Tween, Timeline } from 'react-gsap';

export default class TestComponent extends Component {
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

    render() {
        return (
            <div>
                {/* {this.TimelineComponent}
                {this.TweenComponent} */}
                hi
            </div>
        )
    }
}