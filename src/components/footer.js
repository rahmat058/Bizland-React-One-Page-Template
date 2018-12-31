import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer blue-grey darken-1">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5>Location</h5>
              <p>Bizland, INC</p>
              <p>555 Somewhere Drive, Boston MA</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a className='white-text' href="#home">Home</a></li>
                <li><a className='white-text' href="#about">About</a></li>
                <li><a className='white-text' href="#testimonials">Testimonials</a></li>
                <li><a className='white-text' href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright blue-grey darken-4">
          <div class="container">
          Bizland Theme © 2018
          <a class="grey-text text-lighten-4 right" href="#!">
            <i className="material-icons left">keyboard_arrow_up</i> Back To Top
          </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
