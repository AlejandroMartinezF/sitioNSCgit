import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import NoticeCard from '../Components/NoticeCard/NoticeCard';
import TabNewsPodcast from '../Components/Tab-NewsPodcast/Tab-NewsPodcast';

import NoticeB from '../img/notice-b.jpg'

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="container-fluid px-0">

          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <Hero
            page="-news"
            content="NSC se actualiza diariamente, fortaleciéndose día a día para una mejora constante, obteniendo el conocimiento del mercado para realizar una correcta inversión."
          />

          <div className="container">

            <div className="row mx-0 mt-50">
              <div className="col-12">
                <p className="title">
                  Noticias y Podcasts
                </p>
              </div>
            </div>

            <div className="row my-50">
              <div className="col-12">
                <TabNewsPodcast></TabNewsPodcast>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default News;
