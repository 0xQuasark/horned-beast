import './App.css'
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header subTitle="Little sub" />
      <Gallery subTitle="Little sub" />
      {/* <HornedBeast subTitle="Little sub" /> */}
      <Footer authorName="Paul Brown" />
    </>
  )
}

export default App
