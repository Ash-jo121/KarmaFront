import React from 'react';
import './Navigator.css';
import './App.css'
import Home from './Home'
import Attendance from './Attendance'
import Admission from './Admission'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navigator extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
        <div class ="Nav">
        
        <div class="sidenav">
                <nav>
                    <Link to="/">Dashboard</Link>
                    <Link to="/attendance">Attendance</Link>
                    <Link to="/admission">Admission</Link>
                    <a href="#contact">Contact</a>
                </nav>
        </div>

        <div class ="baseInNav">        
            <Switch>
                <Route path='/attendance' component={Attendance} />                
                <Route path='/admission' component={Admission} />
                <Route path='/' component={Home} />
            </Switch>
        </div>
        
        </div>
    
        );
    }
}