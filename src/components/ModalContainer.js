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
        switch (this.props.modalType) {
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
                    <div>
                        <p>Click to choose what stresses you</p>
                        <Pointer />
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