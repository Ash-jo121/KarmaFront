import React from 'react';
import './Navigator.css';
import S1 from './components/S1'
import Attendance from './Attendance'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navigator extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            
            <div class="sidenav">
                <a href="#about">Dashboard</a>
                <Link to="/Attendance">Attendance</Link>
                <a href="#clients">Admission</a>
                <a href="#contact">Contact</a>

                
        <Switch>
           <Route exact path='/Attendance' component={Attendance} />
        </Switch>
            </div>
    
        );
    }
}