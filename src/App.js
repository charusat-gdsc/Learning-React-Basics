import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Album from './components/Album/Album';
import PicContainer from './components/PicContainer/PicContainer';
import Title from './components/Title';

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Title} />
        <Route exact path="/" component={Album} />
        <Route path="/image/:id" component={PicContainer} />
      </Router>
    );
  }
}

export default App;
