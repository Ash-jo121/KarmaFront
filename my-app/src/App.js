import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown3'
import { BrowserRouter} from 'react-router-dom';
import S1 from './components/S1'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      isClicked:true,
    }

  }
  

  click(){
    alert("hello!")
  }

  render(){
  return (
    
      <div className="App">
      <header className="App-header">
        
          <h1>Attendance</h1> 

     
          <BrowserRouter>
            <Dropdown/>
          </BrowserRouter>
         
      </header>
    </div>
    
    
   
  );
  
  
  }
}

export default App;
