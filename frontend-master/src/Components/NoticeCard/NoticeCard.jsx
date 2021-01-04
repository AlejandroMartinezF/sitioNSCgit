import React, { Component } from 'react';

class NoticeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={`notice-card ${this.props.customClass}`}>
        <img src={this.props.image} alt={this.props.alt} />
        <p className="date px mb-0">{this.props.date}</p>
        {this.props.showtitle === true &&
          <p className="subtitle mb-0">{this.props.title}</p>
        }
        <p className="content mb-0">{this.props.content}</p>
        <div className="link">
          <a href={this.props.link} target="_blank">Leer más</a>
        </div>
      </div>
    );
  }
}

export default NoticeCard;