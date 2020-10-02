import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {
  render() {
    return (
      <div>
        <center><Link to="/" style={{textDecoration: 'none', color: '#000'}}><h1>PHOTO GALLERY</h1></Link></center>
      </div>
    );
  }
}

export default Title;