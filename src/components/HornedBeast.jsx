import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import heartIcon from '../assets/heart.png'

class HornedBeast extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor(props) {
    super(props);

    this.state = {
      timesFavorited: 0,
    };
  }
    
  handleFavoriteClick = () => {
    this.setState({timesFavorited: this.state.timesFavorited + 1});
  }
  
  handleImageClick = () => {
    this.props.specifyBeast(this.props.beastDetails);
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <div className="headerContainer">
            <Card.Title>{this.props.beastDetails.title}</Card.Title>
            {/* <img src="/src/assets/heart.png" alt="heart"></img>  */}
            <img src={heartIcon} alt="heart"></img> 
            {this.state.timesFavorited}
          </div>
          <Card.Img variant="top" onClick={this.handleImageClick} src={this.props.beastDetails.image_url} />
          <Card.Text>{this.props.beastDetails.description}</Card.Text>
          <Button variant="primary" onClick={this.handleFavoriteClick}>Favorite Me!</Button>
          <Card.Text><strong>{this.props.beastDetails.horns} horns</strong></Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
