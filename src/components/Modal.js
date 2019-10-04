import React, { Component } from 'react'
import '../style/ModalGiphy.css'
import '../style/ModalInstructions1.css'

export default class Modal extends Component {

    render() {
        return (
            <div className={`modal ${this.props.modalType}`}>
                <div className={`modal-main ${this.props.modalType}`}>
                    {this.props.closeButton && <button className={`close ${this.props.modalType}`} onClick={this.props.hideModal}>X</button>}
                    {this.props.close && this.props.hideModal}
                    {this.props.title !== '' && <h3 className={`title ${this.props.modalType}`}>{this.props.title}</h3>}
                    {this.props.content()}
                </div>
            </div>
        )
    }
}
