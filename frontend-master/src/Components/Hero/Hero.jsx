import React, { Component } from 'react';
import Decor from '../../img/decor.svg'

class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={`hero-page ${this.props.page}`}>
        <div className="inner w-100 d-flex align-content-center px-0">
          <div className="row mx-0 d-flex justify-content-center my-auto">
            <div className="col-12 col-md-10">
              <p className="title text-center">{this.props.title}</p>
              <p className="content text-center">{this.props.content}</p>
              {this.props.button === true &&
                <a href={this.props.link} className="mb-auto"><button className="btn -outlineWhite">Leer más</button></a>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;