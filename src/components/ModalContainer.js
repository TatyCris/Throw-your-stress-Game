import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import { getGiphy } from '../actions/giphy'
import Pointer from './PointerAnimation'

export class ModalContainer extends Component {
    componentDidMount() {
        this.props.getGiphy()
    }

    renderModalContent = () => {
        switch (this.props.id) {
            case 'giphy':
                return (
                    <img
                        src={this.props.giphy}
                        alt="giphy"
                        className="giphy"
                    />
                )
            case 'tutorial1':
                return (
                    <div className="tutorial-container">
                        <p>Click to choose what stresses you</p>
                        <Pointer id={this.props.id} />
                    </div>
                )
            case 'tutorial2':
                return (
                    <div className="tutorial-container">
                        <Pointer id={this.props.id} />
                        <p>Click to throw it away</p>
                    </div>
                )
            default:
                break;
        }
    }

    render() {
        if (this.props.openModal) {
            return (
                <div>
                    <Modal {...this.props} content={this.renderModalContent} />
                </div>
            )
        }
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        giphy: state.giphy
    }
}

export default connect(mapStateToProps, { getGiphy })(ModalContainer)