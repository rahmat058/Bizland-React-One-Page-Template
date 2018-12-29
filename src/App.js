import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/main.css'

import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
