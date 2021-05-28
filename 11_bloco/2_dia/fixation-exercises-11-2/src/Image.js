import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.source} alt={this.props.alternativeText} />
        <p>Cute cat staring</p>
      </div>
    )
  }
}
console.log(Image);

export default Image;