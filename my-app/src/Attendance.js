import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown3'
import Navigator from './Navigator'
import { BrowserRouter} from 'react-router-dom';

class Attendance extends React.Component {

render(){
    return(
        <div>
            <h2>Attendance</h2>
            <BrowserRouter>
                <Dropdown/>
            </BrowserRouter>
        </div>
    );
}
}

export default Attendance;