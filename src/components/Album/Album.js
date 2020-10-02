import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Album.css';
import Item from '../Item/Item';

class Album extends Component {

  state = {
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
        cap: 'well i am hungry now xD'
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

  render() {
    return ( <div className='xyz'>
      {
        this.state.pictures.map((picture) => (
          <Link key={picture.id} to={`/image/${picture.id}`} style={{textDecoration: 'none', color: '#000'}}> <Item picture={picture} /> </Link>
        ))
      }
    </div>);
     
  }
}

export default Album;