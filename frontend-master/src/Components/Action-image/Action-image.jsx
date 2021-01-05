import React, { Component } from 'react';

class ActionImage extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div className={`action-image ${this.props.customClass}`}>
        <div className="inner">
          <p className="subtitle text-center">{this.props.title}</p>
          <p className="content w-color">{this.props.content}</p>
          <a href={this.props.link}><button className="btn -outlineWhite">Leer más</button></a>
        </div>
        <img className="image" src={this.props.img} alt=""/>
      </div>
    );
  }
}

export default ActionImage;
