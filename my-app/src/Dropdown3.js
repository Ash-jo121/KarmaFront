import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import S1 from './components/S1';
import S3 from './components/S3';
import S5 from './components/S5';
import S7 from './components/S7';


export default class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       redirectS1:false,
       redirectS3:false,
       redirectS5:false,
       redirectS7:false,
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
    // <Route>
    //         <S1/>
    // </Route>
  
    if(e.target.value == 1){
     this.setState({
        redirectS1:true,
      });
     // alert("1")
    }else if(e.target.value == 3){
      this.setState({
         redirectS3:true,
       });
      // alert("1")
     }else if(e.target.value == 5){
      this.setState({
         redirectS5:true,
       });
      // alert("1")
     }else if(e.target.value == 7){
      this.setState({
         redirectS7:true,
       });
      // alert("1")
     }else
      alert(e.target.value)
    
  }

  render() {
   
    return (
      
        <Router>
        <div  className="dropdown"  >
         

        
        <select id = "semesterSelector" onChange ={this.handleChange} >
           
           <option value="1"> S1 </option>
           <option value="3" > S3 </option>
           <option value="5" > S5 </option>
           <option value="7"> S7 </option>
        </select> 

        <Switch>
           <Route exact path='/S1' component={S1} />
           <Route exact path='/S3' component={S3} />
           <Route exact path='/S5' component={S5} />
           <Route exact path='/S7' component={S7} />
           {this.state.redirectS1?<Redirect to="/S1"/>:null}
           {this.state.redirectS3?<Redirect to="/S3"/>:null}
           {this.state.redirectS5?<Redirect to="/S5"/>:null}
           {this.state.redirectS7?<Redirect to="/S7"/>:null}
        </Switch>
        

       </div>
       </Router>

    );
  }
}

