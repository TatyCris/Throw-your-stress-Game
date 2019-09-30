import React, { Component } from 'react'
import '../style/Modal.css'

export default class Modal extends Component {
    render() {
        if (this.props.openModal) {
            return (
                <div className="modal">
                    <div className="modal-main">
                        <button className="close" onClick={this.props.hideModal}>X</button>
                        <h3>You win!!  No more stress!!</h3>
                        {this.props.giphy()}
                    </div>
                </div>
            )
        }
        return null
    }
}
