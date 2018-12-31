import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './assets/css/main.css'

import Navbar from './components/navbar'
import Boxes from './components/boxes'
import About from './components/about'
import Testimonials from './components/testimonial'

class App extends Component {

  // componentDidMount() {
  //   const options = [
  //     {
  //       selector: '.main-text',
  //       offset: 0,
  //       callback: function(el) {
  //         Materialize.fadeInImage(el)
  //       }
  //     }
  //   ]

  //   Materialize.scrollFire(options)
  // }
  
  render() {
    return (
      <div>
        <Navbar />
        <Boxes />
        <About />
        <Testimonials />
      </div>
    );
  }
}

export default App;
