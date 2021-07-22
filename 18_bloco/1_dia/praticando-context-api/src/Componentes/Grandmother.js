import React from 'react';
import Father from './Father';

class Grandmother extends React.Component {
  render() {
    return (
      <div>
        <h2>Eu sou o VÔ</h2> 
        <Father />      
      </div>
    )
  }
}

export default Grandmother;