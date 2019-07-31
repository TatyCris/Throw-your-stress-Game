import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TimelineMax } from "gsap";

class Score extends Component {
    tlScore = new TimelineMax()
    score = null

    // tlScore
    // .to($progressBar, 2, {
    //     value: 100,
    //     ease: Power2.easeInOut
    // })
    // .repeat(-1)

    render() {
        return (
            <div
                className="scoreBar"
                ref={div => this.score = div}
            >
                hi
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        // tries: state.tries
    }
}

export default connect(mapStateToProps)(Score)