import React from 'react';

import './App.css';

class Welcomes extends React.Component {
    
    render() {
        return (
            <div>
              <h3>Name : {this.props.name}</h3>
              <h3>Age : {this.props.age}</h3>
              <h3>Qualification : {this.props.qualification}</h3>
            </div>
          );
    }
  }

  

export default Welcomes;
