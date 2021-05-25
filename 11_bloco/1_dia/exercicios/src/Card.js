import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.featureImage} alt={this.props.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.link} className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
  }  
}

export default Card;

