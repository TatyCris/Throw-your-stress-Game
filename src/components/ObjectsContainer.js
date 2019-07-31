import React, { Component } from 'react'
import { connect } from 'react-redux'
import Objects from './Objects'
import { getObjects } from '../actions/game'
// import { TweenMax } from "gsap/all";
// import objectsDb from './objectsDb'

class ObjectsContainer extends Component {
    // objects = []
    // tl = new TweenMax()
    // objectsTween = null

    // wrapper = null
    // carousel = null
    // image = null
    // nav = null

    componentDidMount() {
        // this.tl.set(this.objects, {
          
        //     transform: "rotateY("+rY+"deg) translateZ(288px)"
            
        //   });
    }

    render() {
        return (
            <div>
                <div
                    className="nav"
                    ref={div => this.nav = div}
                >
                    <button
                        data-increment="-1"
                    >Previous
                    </button>
                    <button
                        data-increment="1"
                    >Next
                    </button>
                </div>
                <div className="wrapper">
                    <Objects />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usedObjects: state.usedObjects
    }
}

export default connect(mapStateToProps, { getObjects })(ObjectsContainer)
