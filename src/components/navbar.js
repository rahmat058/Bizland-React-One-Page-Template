import React, { Component } from 'react'
import M from 'materialize-css'

class Navbar extends Component {

  componentDidMount() {
    //Sidenav Open
    let sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {})
  }

  render() {
    return (
      <header className="main-header">
        <div className="primary-overlay">
          <div className="navbar-fixed">
            <nav className='transparent'>
              <div className="container">
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo">Bizland</a>
                  <a href="#" data-target='mobile-nav' className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                  </a>

                  <ul className="right hide-on-med-and-down">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a href="#" className="btn blue">Download</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* Side nav mobile view */}
          <ul className="sidenav" id='mobile-nav'>
            <h4 className="blue-grey darken-3 center">Bizland</h4>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#" className="btn blue">Download</a>
            </li>
          </ul>


          {/* Show Case Start Here */}
          <div className="showcase container">
            <div className="row">
              <div className="col s12 main-text">
                <h5>You found the...</h5>
                <h1>Right Place To Start</h1>
                <p className="flow-text">To take your business to the next level with our services that have taken companies to the fourtune 500</p>
                <br/>
                <a href="#about" className="btn btn-large white black-text">Learn More</a>
                <a href="#contact" className="white-text">
                  <i className="material-icons medium scroll-icon">arrow_drop_down_circle</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
