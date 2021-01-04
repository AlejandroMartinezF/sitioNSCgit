import React, { Component } from 'react';

class PodcastCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={`podcast-card ${this.props.customClass}`}>
        <img src={this.props.image} alt={this.props.alt} />
        <p className="subtitle mb-0">{this.props.title}</p>
        <p className="content mb-0">{this.props.content}</p>
        <div className="link">
          <a target="blank" href={this.props.link}>ESCUCHAR</a>
        </div>
      </div>
    );
  }
}

export default PodcastCard;