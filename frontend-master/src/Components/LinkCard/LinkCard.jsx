import React, { Component } from 'react';

class LinkCard extends Component {
  render() {
    return (
      <div className={`link-card ${this.props.customClass}`}>
        <a target="blank" className="link" href={this.props.link}>
          <img className="image" src={this.props.img} alt="" />
          <p className="text text-center">{this.props.title}</p>
        </a>
      </div>
    );
  }
}

export default LinkCard;