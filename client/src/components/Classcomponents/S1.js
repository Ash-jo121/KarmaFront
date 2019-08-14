import React, { Component } from 'react';

import jwt_decode from 'jwt-decode'

class S1 extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Ha',
      attendance: '',
      errors: {}
    }

  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.class,
      attendance: decoded.attendance_C1,
    })
  }

  render() {
    return (
        <div>
          <h2>Home S1</h2>

          <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Check</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Class</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Attendance</td>
                <td>{this.state.attendance}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
          
          
        </div>
    );
  }
  
}

export default S1;