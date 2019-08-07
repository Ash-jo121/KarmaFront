import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Dropdown from './Dropdown3'
import Navigator from './Navigator'
import { BrowserRouter} from 'react-router-dom';

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
          
          <BrowserRouter>
            <Navigator/>
          </BrowserRouter>
     
          <BrowserRouter>
            <Home/>
          </BrowserRouter>
         
      </header>
    </div>
    
    
   
  );
  
  
  }
}

export default App;
