import React, { Component } from 'react'

import './Navigator.css';
import '../App.css'

class Home extends Component {
  render() {
    return (
      <div className="container" >
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Home