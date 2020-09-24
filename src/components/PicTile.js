import React, { Component } from 'react';
// import propTypes from 'prop-types';

export class PicTile extends Component{

    getStyle = () => {
        return{
            width: '300px',
            height: '250px',
            backgroundColor: 'grey',
            margin: '7px',
            display: 'inline-block',
        }
    };

    h1Style = () => {
        return{
            padding: '0px',
            margin: '0px',
            alignItems: 'center',
            position: 'absolute'
        }
    }

  render(){
    return(
      <div> 
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
        <div style = {this.getStyle()}> </div>
      </div>

      

    );
  }
}

export default PicTile;
