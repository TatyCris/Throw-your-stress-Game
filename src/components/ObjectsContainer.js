import React, { Component } from 'react'
import { connect } from 'react-redux'
import Objects  from './Objects'
import { getObjects } from '../actions/game'

class ObjectsContainer extends Component {
    render() {
        return (
            <div>
                <Objects />
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
