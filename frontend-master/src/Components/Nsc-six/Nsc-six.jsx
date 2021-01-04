import React, { Component } from 'react';
import NscSixDetail from '../Nsc-six-detail/Nsc-six-detail';
import axios from 'axios';

const NSC_NEWS_URL = process.env.REACT_APP_NSC_NEWS_URL

class NscSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount = () => {
    this.getNscSix();
  }

  getNscSix = () => {
    axios.get(NSC_NEWS_URL).then(response => {
      this.setState({
        news: response.data,
      })
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide nsc-six d-none d-lg-block" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row">
                {
                  this.state.news.slice(0, 3).map((news, index) => {
                    let number = `0${index + 1}`;

                    return(
                      <div className="col-12 col-lg-4">
                        <NscSixDetail
                          customClass="mb-30"
                          number={number}
                          content={news}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div class="carousel-item">
              <div className="row">
                {
                  this.state.news.slice(3, this.state.news.length).map((news, index) => {
                    let number = `0${index + 4}`;

                    return (
                      <div className="col-12 col-lg-4">
                        <NscSixDetail
                          customClass="mb-30"
                          number={number}
                          content={news}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
        </div>

        <div id="Indicators" class="carousel slide nsc-six d-lg-none" data-ride="carousel">
          <div class="carousel-inner">
            {
              this.state.news.map((news, index) => {
                let number = `0${index + 1}`;

                if (index === 0) {
                  return (
                    <div class="carousel-item active">
                      <div className="row">
                        <div className="col-12">
                          <NscSixDetail
                            customClass="mb-30"
                            number={number}
                            content={news}
                          />
                        </div>
                      </div>
                    </div>
                  )
                }
                else {
                  return (
                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-12">
                          <NscSixDetail
                            customClass="mb-30"
                            number={number}
                            content={news}
                          />
                        </div>
                      </div>
                    </div>
                  )
                }

              })
            }
          </div>

          <ol class="carousel-indicators">
            <li data-target="#Indicators" data-slide-to="0" class="active"></li>
            <li data-target="#Indicators" data-slide-to="1"></li>
            <li data-target="#Indicators" data-slide-to="2"></li>
            <li data-target="#Indicators" data-slide-to="3"></li>
            <li data-target="#Indicators" data-slide-to="4"></li>
            <li data-target="#Indicators" data-slide-to="5"></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default NscSix;