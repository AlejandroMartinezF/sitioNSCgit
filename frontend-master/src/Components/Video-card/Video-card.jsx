import React, { Component } from 'react';

class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (

    <div>
      <div className="row mt-30 d-flex">
        <div className={`video p-0 col-12 mx-18 ${this.props.customClass}`}>
          <iframe width="100%" src="https://www.youtube.com/embed/FCwEzdlEFpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" al lowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
    );
  }
}

export default VideoCard;