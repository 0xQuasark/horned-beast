import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Gallery extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through
  constructor() {
    super();
    this.state = {
      selectedHorns: [1, 2, 3, 100],
    };
  }

  handleCheckBoxChange = (numberOfHorns) => {
    // let numberOfHorns = parseInt(stringOfHorns);
    let selectedHorns = this.state.selectedHorns;

    if (selectedHorns.includes(numberOfHorns)) {
      // if it's in the array, let's get the index and remove it
      let index = selectedHorns.indexOf(numberOfHorns);
      selectedHorns.splice(index, 1);
    } else {
      selectedHorns.push(numberOfHorns);
    }

    this.setState({
      selectedHorns: selectedHorns,
    });

    // console.log(numberOfHorns, selectedHorns);
  }

  filterBeastsByHorns = () => {
    const selectedHorns = this.state.selectedHorns;
    return this.props.beastDataValues.filter(beast => {
      // console.log(beast.horns, selectedHorns);
      return selectedHorns.includes(beast.horns);
    });
  }

  render () {
    const filteredBeasts = this.filterBeastsByHorns();

    return (
      <div id="gallery-component">
        <div style={{ textAlign: 'left' }}>
          <p>Filter the number of horns:</p>
          <Form >
            <Form.Check 
                inline
                defaultChecked
                type="switch"
                id={`1horn`}
                label={`1 Horn`}
                onChange={() => this.handleCheckBoxChange(1)}
              />
              <Form.Check
                inline
                defaultChecked
                type="switch"
                id={`2horn`}
                label={`2 Horns`}
                onChange={() => this.handleCheckBoxChange(2)}
              />
              <Form.Check
                inline
                defaultChecked
                type="switch"
                id={`3horn`}
                label={`3 Horns`}
                onChange={() => this.handleCheckBoxChange(3)}
              />
              <Form.Check
                inline
                defaultChecked
                type="switch"
                id={`100horn`}
                label={`100 Horns`}
                onChange={() => this.handleCheckBoxChange(100)}
              />
          </Form>
        </div>
        <hr></hr>
        <Container>
          <Row>
            {/* {this.props.beastDataValues.map((beast, index) => ( */}
            {filteredBeasts.map((beast, index) => (
              <Col key={index}>
                <HornedBeast
                  specifyBeast={this.props.specifyBeast}
                  beastDetails={beast}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Gallery;
