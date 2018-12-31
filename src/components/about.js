import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section className="section section-about grey lighten-3 center">
        <div className="container">
          <h2>About Buizland</h2>
          <p className="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis. Fugiat libero quod harum perspiciatis molestias accusantium exercitationem assumenda quasi?</p>
          <div className="row">
            <div className="col s12 m6">
              <img src={require('../assets/img/people.jpg')} alt="" className="responsive-img circle"/>
            </div>
            <div className="col s12 m5 offset-m1">
              <br/>
              <ul className="collection with-header z-depth-4">
                <li className="collection-header">
                  <h5>Services</h5>
                </li>

                <li className="collection-item">
                  <i className="material-icons left">check</i> Buisness Consultation
                </li>
                <li className="collection-item">
                  <i className="material-icons left">check</i> Financial Analytics
                </li>
                <li className="collection-item">
                  <i className="material-icons left">check</i> Security Secvices
                </li>
                <li className="collection-item">
                  <i className="material-icons left">check</i> Marketing Advertizing
                </li>
                <li className="collection-item">
                  <i className="material-icons left">check</i> Internet Services
                </li>
                <li className="collection-item">
                  <i className="material-icons left">check</i> Accounting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
