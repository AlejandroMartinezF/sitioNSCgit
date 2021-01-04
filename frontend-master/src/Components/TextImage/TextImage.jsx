import React, { Component } from 'react';

class TextImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`text-image -investment ${this.props.customClass}`}>
        <div className="inner">
          <p className="subtitle text-center">{this.props.title}</p>
          <p className="content w-color">{this.props.content}</p>
          <a href={this.props.link}><button className="btn -outlineWhite">Leer más</button></a>
        </div>
      </div>
    );
  }
}

export default TextImage;