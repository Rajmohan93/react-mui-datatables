import React from "react";
import {Modal, Button} from "react-bootstrap";

function Model(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby = "contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Modal Title</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Modal Body</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>CLOSE</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Model;