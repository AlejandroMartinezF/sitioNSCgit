import React, { Component } from 'react';

class ExcecutivePreview extends Component {
  render() {
    return (
      <div className={`ex-preview ${this.props.page}`}>
        <img className="image" src={this.props.img} alt="" />
        <p className="name mb-0 text-center">{this.props.name}</p>
        <p className="position mb-0">{this.props.position}</p>
      </div>
    );
  }
}

export default ExcecutivePreview;