import React from 'react';
import jwt_decode from 'jwt-decode'

import { attendance } from './UserFunctions'

import logo from '../logo.svg';
import '../App.css';
import Dropdown from './Dropdown3'
import Navigator from './Navigator'
import { BrowserRouter} from 'react-router-dom';

class Attendance extends React.Component {
  constructor() {
    super()
    this.state = {
        name: 'decoded.class',
        attendance: 'ecoded.attendance_C1',
        class:'',
      tableRows:[],
      errors: {}
      
    }

  }

  


  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.class,
      attendance: decoded.attendance_C1,
      class: decoded.class,
    })

    const user = {
      email: this.state.email,
      password: this.state.password,
      class: decoded.class
    }


attendance(user).then(res => {
  if (res) {
    this.setState({
      tableRows: res
    })

    console.log(res)
  }
})

  }
    
      render() {
        return (
            <div>
              {this.state.class == 'X'?(
                
                    <Dropdown/>
  
            ) :
            (
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
            
            )}
        

              
              
            </div>
        );
      }
      
}

export default Attendance;