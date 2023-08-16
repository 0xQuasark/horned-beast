import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Modal show={this.props.isBeastSelected} onHide={this.props.unspecifyBeast}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}!</Modal.Title>
        </Modal.Header>
        <img src={this.props.selectedBeast.image_url} onClick={this.props.unspecifyBeast}></img>
        <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.unspecifyBeast}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;