import React from 'react';

import logo from '../logo.svg';
import '../App.css';
import Dropdown from './Dropdown3'
import Navigator from './Navigator'
import { BrowserRouter} from 'react-router-dom';

//import { attendance } from './UserFunctions';

class Admission extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            errors: {},
            posts :[]
          }
    }


render(){    
    return(
        <div>
           
            <h2>Admission</h2>
        </div>
    );
}
}
 export default Admission;