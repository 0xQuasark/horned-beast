import './App.css'
import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import beastDataValues from './assets/data.json'


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      isBeastSelected: false,
      selectedBeast: null,
    }
  }

  specifyBeast = (beast) => {
    this.setState({
      isBeastSelected: true,
      selectedBeast: beast,
    })
  }

  unspecifyBeast = () => {
    this.setState({
      isBeastSelected: false,
      selectedBeast: null,
    })
  }

  render() {

    let modalContent = null;
    if (this.state.isBeastSelected) {

      modalContent = (
        <SelectedBeast 
          isBeastSelected={this.state.isBeastSelected} 
          unspecifyBeast={this.unspecifyBeast}
          selectedBeast={this.state.selectedBeast}
        />
      );
    }

    return (
      <>
        <Header />
        <Gallery beastDataValues={beastDataValues} specifyBeast={this.specifyBeast} />
        {modalContent}
        <Footer authorName="Paul Brown" />
      </>
    )
  }
}

export default App
