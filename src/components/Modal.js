import React, { Component } from 'react'
import '../style/ModalGiphy.css'
import '../style/ModalTutorial.css'

export default class Modal extends Component {

    render() {
        return (
            <div className={`modal ${this.props.type}`}>
                <div className={`modal-main ${this.props.type} ${this.props.id}`}>
                    {this.props.closeButton && <button className={`close ${this.props.type}`} onClick={this.props.hideModal}>X</button>}
                    {this.props.close && this.props.hideModal}
                    {this.props.title !== '' && <h3 className={`title ${this.props.type}`}>{this.props.title}</h3>}
                    {this.props.content()}
                </div>
            </div>
        )
    }
}
