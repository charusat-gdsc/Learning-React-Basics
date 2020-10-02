import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

  render() {
    return (
      <div style={{overflow: 'hidden'}} className="itemStyle">
        <img  src={this.props.picture.url} alt="" width="100%"></img>
      </div>
    );
  }
}

export default Item;