import React, { Component } from 'react'

class Contact extends Component {

  componentDidMount() {
    // const position = [42.361145, -71.057083]
    // const centerPosition = [42.377815, -70.981133] 

    // function showGoogleMaps() {
    //   //Map Position
    //   const latLng = google.maps.LatLng(position[0], position[1])
    //   const centerLatLng = google.maps.LatLng(centerPosition[0], centerPosition[1])

    //   //Map options
    //   const mapOptions = {
    //     zoom: 12,
    //     streetViewControl: false,
    //     scaleControl: true,
    //     mapTypeId: google.maps.mapTypeId.ROADMAP,
    //     center: centerLatLng
    //   }

    //   //create map
    //   map = new google.maps.Map(document.getElementById('googlemap'), mapOptions)

    //   //show marker
    //   marker = new google.map.Marker({
    //     position: latLng,
    //     map: map,
    //     draggable: false,
    //     animation: google.maps.Animation.DROP
    //   });
    // }

    // //Maps event
    // google.maps.event.addDomListener(window, 'load', showGoogleMaps)
  }

  render() {
    return (
      <section id='contact' className="section section-contact center scrollspy">
        <div id="googlemap"></div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m6">
              <div className="card-panel z-depth-5">
                <h4>Contact Us</h4>
                <div className="input-field">
                  <input type="text" id='name' placeholder='Name'/>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                  <input type="email" id='email' placeholder='Email'/>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input type="number" id='phone' placeholder='Phone Number'/>
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-field">
                  <textarea id="message" className='materialize-textarea' placeholder='Message'></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <input type="submit" value="Submit" className='btn blue-grey'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
