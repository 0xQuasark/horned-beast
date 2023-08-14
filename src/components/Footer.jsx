import React from 'react';

class Footer extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <footer>
        <h6>Handmade in WA, USA by {this.props.authorName}</h6>
      </footer>
    )
  }
}

export default Footer;
