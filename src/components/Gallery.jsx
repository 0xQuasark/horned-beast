import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import beastDataValues from '../assets/data.json'

class Gallery extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor() {
    super();
  }

  render () {

    return (
      <Container>
        <Row>
          {this.props.beastDataValues.map((beast, index) => (
            <Col key={index}>
              <HornedBeast
                // title={beast.title}
                // imageURL={beast.image_url}
                // description={beast.description}
                specifyBeast={this.props.specifyBeast}
                beastDetails={beast}
                // unselectBeast={this.props.unselectBeast}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Gallery;
