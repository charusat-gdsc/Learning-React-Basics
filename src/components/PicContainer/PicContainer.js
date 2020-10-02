import React, { Component } from 'react';
import Pic from '../Pic/Pic';
import './PicContainer.css';

class PicContainer extends Component {
    
  state = {
    value: parseInt(this.props.match.params.id),
    pictures : [
      {
        id : 0,
        url : 'https://images.unsplash.com/photo-1601342631623-f1e2045334f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
        title: 'Working',
        cap: 'woman working hard'
      },
      {
        id : 1,
        url : 'https://images.unsplash.com/photo-1601301705603-97fec6eea06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Water',
        cap: 'Just water nothing else'
      },
      {
        id : 2,
        url : 'https://images.unsplash.com/photo-1601277729892-bb20c7cadf6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
        title: 'Lighting',
        cap: 'some guys dynamic instagram upload'
      },
      {
        id : 3,
        url : 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
        title: 'Food',
        cap: 'well i am hungry now Xb'
      },
      {
        id : 4,
        url : 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
        title: 'Lemons',
        cap: 'when life gives you lemons, make lemonade :)'
      },
      {
        id : 5,
        url : 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80',
        title: 'Rocks',
        cap: 'not just rocks, BLACK ROCKS!'
      }
    ]
  }

  previous = () => {
    if((this.state.value-1) === -1){
      this.setState({value : (this.state.pictures.length-1)});
    } else{
      this.setState({value : this.state.value-1});
    }
  } 

  next = () => {
    if((this.state.value+1) === this.state.pictures.length){
      this.setState({value : 0});
    } else{
      this.setState({value : this.state.value+1});
    }
  } 

  render() {
    return(
      <div className="App">
        <Pic key={this.state.pictures[this.state.value].id} picture={this.state.pictures[this.state.value]} /> <br></br>
        <button onClick={this.previous}>&#x3c;</button> {'       '}
        <button onClick={this.next}>&#x3e;</button>
      </div>
    );
  }
}

export default PicContainer;