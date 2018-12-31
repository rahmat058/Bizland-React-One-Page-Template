import React, { Component } from 'react'

class Testimonials extends Component {
  render() {
    return (
      <section className="section section-testimonials blue white-text center">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="row">
            <div className="col s12 m4">
              <div className="card grey lighten-4 black-text z-depth-4">
                <div className="card-content">
                  <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex vero velit eaque optio doloremque hic explicabo, voluptate dolorum cumque.</em></p>
                </div>
                <div className="card-action">
                  <p>John Doe From ABC, INC</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card grey lighten-4 black-text z-depth-4">
                <div className="card-content">
                  <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex vero velit eaque optio doloremque hic explicabo, voluptate dolorum cumque.</em></p>
                </div>
                <div className="card-action">
                  <p>Sharon Johnson From XYZ, INC</p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card grey lighten-4 black-text z-depth-4">
                <div className="card-content">
                  <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex vero velit eaque optio doloremque hic explicabo, voluptate dolorum cumque.</em></p>
                </div>
                <div className="card-action">
                  <p>Wayne Jackson From 123, INC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
