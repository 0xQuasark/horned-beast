import React from 'react';

class HornedBeast extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor(props) {
    super(props);
  }

  render () {


    return (
      <div>
        <h2>Name of animal: {this.props.title}</h2>
        <img src={this.props.imageURL} alt={this.props.description}></img>
        <p>{this.props.description}</p>
        <hr></hr>
      </div>
    )
  }
}

export default HornedBeast;
