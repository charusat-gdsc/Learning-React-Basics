import React, { Component } from 'react';
import './App.css';
import PicTile from './components/PicTile'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>PHOTO GALLERY</h1>
        <PicTile />
       </div>

    );
  }
}

export default App;
