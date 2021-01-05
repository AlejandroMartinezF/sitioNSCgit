import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { ButtonGroup, ButtonToolbar } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios'

import NoticeCard from '../NoticeCard/NoticeCard';
import PodcastCard from '../PodcastCard/PodcastCard';

import PodcastA from '../../img/podcast-a.jpg';

const FINANCIERO_NEWS_URL = process.env.REACT_APP_FINANCIERO_NEWS_URL;
const REUTERS_NEWS_URL = process.env.REACT_APP_REUTERS_NEWS_URL;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      financiero_news: [],
      reuters_news: []
    }
  }

  componentDidMount = () => {
    this.getNewsFinanciero();
    this.getNewsReuters();
  }

  getNewsFinanciero = () => {
    axios.get(FINANCIERO_NEWS_URL)
         .then(response => {
           this.setState({
             financiero_news: response.data
           })
         })
  }

  getNewsReuters = () => {
    axios.get(REUTERS_NEWS_URL)
      .then(response => {
        this.setState({
          reuters_news: response.data
        })
      })
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    };
  }

  render () {
    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              NOTICIAS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              PODCASTS
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="row my-50">
              { 
                this.state.financiero_news.slice(0, 3).map(news => {
                  return(
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-20">
                      <NoticeCard
                        image={news.image}
                        date={news.date}
                        content={news.headline}
                        link={news.link} />
                    </div>
                  )
                })
              }
              {
                this.state.reuters_news.slice(0, 3).map(news => {
                  return (
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-20">
                      <NoticeCard
                        image={news.image}
                        date={news.date}
                        content={news.headline}
                        link={news.link} />
                    </div>
                  )
                })
              }
              {
                this.state.financiero_news.slice(3, this.state.financiero_news.length).map(news => {
                  return (
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-20">
                      <NoticeCard
                        image={news.image}
                        date={news.date}
                        content={news.headline}
                        link={news.link} />
                    </div>
                  )
                })
              }
              {
                this.state.reuters_news.slice(3, this.state.reuters_news.length).map(news => {
                  return (
                    <div className="col-lg-4 col-md-6 col-12 d-flex mb-20">
                      <NoticeCard
                        image={news.image}
                        date={news.date}
                        content={news.headline}
                        link={news.link} />
                    </div>
                  )
                })
              }
              {/* <div className="col-12 d-flex justify-content-center mt-30">
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div> */}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="row my-50">
              <div className="col-lg-3 col-md-6 col-12">
                <PodcastCard
                  customClass=" mb-20"
                  image={PodcastA}
                  title="Cuéntame de economía"
                  content="Economía para no economistas. Con un tono lúdico y con rigor se explica el tema económico…"
                  link="https://open.spotify.com/show/2G44OhAzSlNludsv2XPKJd" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <PodcastCard
                  customClass=" mb-20"
                  image={PodcastA}
                  title="Cuéntame de economía"
                  content="Economía para no economistas. Con un tono lúdico y con rigor se explica el tema económico…"
                  link="https://open.spotify.com/show/2G44OhAzSlNludsv2XPKJd" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <PodcastCard
                  customClass=" mb-20"
                  image={PodcastA}
                  title="Cuéntame de economía"
                  content="Economía para no economistas. Con un tono lúdico y con rigor se explica el tema económico…"
                  link="https://open.spotify.com/show/2G44OhAzSlNludsv2XPKJd" />
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <PodcastCard
                  customClass=" mb-20"
                  image={PodcastA}
                  title="Cuéntame de economía"
                  content="Economía para no economistas. Con un tono lúdico y con rigor se explica el tema económico…"
                  link="https://open.spotify.com/show/2G44OhAzSlNludsv2XPKJd" />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default News;
