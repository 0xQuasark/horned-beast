import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor(props) {
    super(props);

    this.state = {
      timesFavorited: 0,
    };
  }
    
  handleClick = () => {
    this.setState({timesFavorited: this.state.timesFavorited + 1})
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <div className="headerContainer">
            <Card.Title>{this.props.title}</Card.Title>
            <img src="/src/assets/heart.png" alt="heart"></img> 
            {this.state.timesFavorited}
          </div>
          <Card.Img variant="top" onClick={this.handleClick} src={this.props.imageURL} />
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Favorite Me!</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
