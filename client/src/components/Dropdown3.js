import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import S1 from './Classcomponents/S1';
import S3 from './Classcomponents/S3';
import S5 from './Classcomponents/S5';
import S7 from './Classcomponents/S7';

import {attendance} from './UserFunctions'

export default class Dropdown extends React.Component {
constructor(props){
 super(props);

 this.state = {
       displayMenu: false,
       redirectS1:false,
       redirectS3:false,
       redirectS5:false,
       redirectS7:false,
       posts : [],
       name:'LOL',
       val:0,
     };



  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  this.handleChange = this.handleChange.bind(this);
  
  

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


  handleChange(e) {

    let user={
      name:'Jake',
      email:'LOL',
      class:'S1'
    };

    this.setState({
      val: e.target.value
    });
  
    if(e.target.value == 1){
     this.setState({
        redirectS1:true,        
       redirectS3:false,
       redirectS5:false,
       redirectS7:false,
       class: 'S1'
      });
      user = {
        email: this.state.email,
        password: this.state.password,
        class: 'S1'
      }

     // alert("1")
    }else if(e.target.value == 3){
      this.setState({
         redirectS3:true,
         redirectS1:false,
         redirectS5:false,
         redirectS7:false,
         class: 'S3'
       });

       user = {
        email: this.state.email,
        password: this.state.password,
        class: 'S3'
      }
      // alert("1")
     }else if(e.target.value == 5){
      this.setState({
         redirectS5:true,
         
       redirectS1:false,
       redirectS3:false,
       redirectS7:false,
       });
      // alert("1")
     }else if(e.target.value == 7){
      this.setState({
         redirectS7:true,
         
       redirectS1:false,
       redirectS3:false,
       redirectS5:false,
       });
      // alert("1")
     }else
      alert(e.target.value)





    attendance(user).then(res => {
      if (res) {
        this.setState({
          posts: res
        })

      console.log(res)
      }
    })
    
  }

  render() {
   
    return (

<Router>
<div  className="dropdown"  >
 


<select id = "semesterSelector" onChange ={this.handleChange} >
<option selected disabled hidden value="0">select a class</option>
   <option value="1"> S1 </option>
   <option value="3" > S3 </option>
   <option value="5" > S5 </option>
   <option value="7"> S7 </option>
</select> 
{this.state.val >0 ?(

  <div className="container">
  <div className="jumbotron mt-5">
    <div className="col-sm-8 mx-auto">
      <h1 className="text-center">Check</h1>
    </div>
    <table className="table col-md-6 mx-auto">
      <tbody>
        <tr>
          <td>Class</td>
          <td>{this.state.class}</td>
        </tr>
        <tr>
          <td>Attendance</td>
          <ul>
           {this.state.posts.map(item => {
            return <li>{item.attendance_C1}</li>;
            })}
          </ul>
        </tr>
      </tbody>
    </table>
  </div>
</div>
): (
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">Select a class</h1>
            </div>
            </div>
)}

</div>
</Router>

    );
  }
}


