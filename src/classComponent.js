import React from 'react';
import logo from './logo.svg';
import './App.css';

class Welcomes extends React.Component {
    
    render() {
        return (
            <div>
              <h2>age : {this.props.age}</h2>
              <h2>Age : {this.props.age}</h2>
              <h2>Qualification : {this.props.qualification}</h2>
            </div>
          );
    }
  }

  

export default Welcomes;
