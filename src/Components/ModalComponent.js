import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalComponent = function (props) {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.handleButton}>{props.buttonText}</Button>
          </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;