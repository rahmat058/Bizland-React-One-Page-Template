import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './assets/css/main.css'

import Navbar from './components/navbar'
import Boxes from './components/boxes'
import About from './components/about'
import Testimonials from './components/testimonial'
import Footer from './components/footer'

class App extends Component {

  componentDidMount() {
    // const options = [
    //   {
    //     selector: '.main-text',
    //     offset: 0,
    //     callback: function(el) {
    //       Materialize.fadeInImage(el)
    //     }
    //   }
    // ]

    // Materialize.scrollFire(options)

    let sp = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(sp, {});
  }
  
  render() {
    return (
      <div id='home' className='scrollspy'>
        <Navbar />
        <Boxes />
        <About />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
