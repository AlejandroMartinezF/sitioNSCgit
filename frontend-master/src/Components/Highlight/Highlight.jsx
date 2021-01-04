import React, { Component } from 'react';

class Highlight extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div className="highlight-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 py-50 d-flex align-items-center flex-column">
              <p className="title">{this.props.title}</p>
              <p>{ this.props.content }</p>
              <p>{ this.props.contentB }</p>
              <p className="mb-auto mt-auto">{ this.props.center }</p>
              <p><b>{ this.props.contentBold }</b></p>
              <p>{ this.props.contentC }</p>
              { this.props.button === true &&
                <a href="" className="mb-auto"><button className="btn -outlineDark">Leer más</button></a>
              }
            </div>

            <div className="col-12 col-lg-6">
              <img className="w-100 d-none d-md-block" src={this.props.image} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlight;
