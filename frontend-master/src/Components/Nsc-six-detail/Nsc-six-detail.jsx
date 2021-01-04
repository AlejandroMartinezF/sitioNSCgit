import React, { Component } from 'react';

class NscSixDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div className={`six-detail ${this.props.customClass}`}>
        <p className="title number mb-0">{this.props.number}</p>        
        <div className="content">
          <p className="text">{this.props.content}</p>
          <div className="date">{this.props.date}</div>
        </div>
      </div>
    );
  }
}

export default NscSixDetail;