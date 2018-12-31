import React, { Component } from 'react'

class Boxes extends Component {
  render() {
    return (
      <section className="section-boxes center">
        <div className="row">
          <div className="col s12 m6 l3 blue white-text box">
            <i className="material-icons medium">show_chart</i>
            <h4>Grow Your Buisness Quickly</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsum officia repudiandae vel, omnis sunt aut deserunt unde repellat necessitatibus!</p>
          </div>
          <div className="col s12 m6 l3 purple white-text box">
            <i className="material-icons medium">people</i>
            <h4>Professitional Advisors</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsum officia repudiandae vel, omnis sunt aut deserunt unde repellat necessitatibus!</p>
          </div>
          <div className="col s12 m6 l3 teal white-text box">
            <i className="material-icons medium">verified_users</i>
            <h4>Secure Your Company</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsum officia repudiandae vel, omnis sunt aut deserunt unde repellat necessitatibus!</p>
          </div>
          <div className="col s12 m6 l3 amber darken-4 white-text box">
            <i className="material-icons medium">account_balance</i>
            <h4>Multiply Your Income</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsum officia repudiandae vel, omnis sunt aut deserunt unde repellat necessitatibus!</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Boxes
