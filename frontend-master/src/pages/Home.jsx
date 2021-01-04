import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import NscSix from '../Components/Nsc-six/Nsc-six'
import Highlight from '../Components/Highlight/Highlight'
import Footer from '../Components/Footer/Footer'
import TextImage from '../Components/TextImage/TextImage'
import NoticeCard from '../Components/NoticeCard/NoticeCard'
import CarouselComponent from '../Components/Carousel/Carousel'

import NoticeA from '../img/notice-a.jpg'
import NoticeB from '../img/notice-b.jpg'
import Building from '../img/building.jpg'
import ActionImage from '../Components/Action-image/Action-image'
import ActionA from '../img/action-a.jpg'
import ActionB from '../img/action-b.jpg'
import ActionC from '../img/action-c.jpg'
import ActionE from '../img/action-e.jpg'
import ActionF from '../img/action-f.jpg';


class Home extends Component {

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
          <CarouselComponent
          />
          {/* <Hero
            button={true}
            page="-home"
            content="La primera empresa de Asesoría Financiera Independiente en México."
            link="/about"
          /> */}

          <div className="container">
            <div className="row mt-50">
              <div className="col-12 my-50">
                <p className="title text-center">Las <b>06</b> de NSC</p>
                <p className="text-center">Entérate de las últimas y más relevantes noticias de ámbito financiero.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <NscSix />
                
              </div>
            </div>

          </div>

          <div className="row my-100 mx-0">
            <div className="col-12 px-0">
              <Highlight
                title="NSC Asesores"
                content="Somos una firma de  “Asesoría en Inversión Independiente” fundada en 1987, registrada ante la CNBV; cuya misión radica en ofrecer a nuestros clientes asesoría, a través de un equipo altamente capacitado, cuyos valores son la honestidad, confidencialidad, prudencia, profesionalismo e independencia de criterio."
                contentBold="Al ser independientes evitamos cualquier conflicto de interés."
                contentC="Somos la firma independiente con mayor cantidad de activos manejados en México."
                image={Building}
              />
            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                <p className="title">Nuestros Servicios</p>
                <p className="mb-30">En NSC Asesores, S.C., Asesor en inversiones independiente sabemos que realizar inversiones acertadas en un ámbito económico tan complejo y con un ritmo de cambio tan acelerado como el que vivimos hoy en día, exige una orientación profesional mucho más especializada que los servicios tradicionales que prestan la instituciones financieras.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-6">
                <ActionImage
                  customClass="mb-30"
                  img={ActionB}
                  title="Gestión de inversiones"
                  link="/services"
                />
              </div>

              <div className="col-12 col-lg-6">
                <ActionImage
                  customClass="mb-30"
                  img={ActionA}
                  title="Asesoría de inversiones"
                  link="/services"
                />
              </div>

              <div className="col-12 col-lg-6">
                <ActionImage
                  customClass="mb-30"
                  img={ActionC}
                  title="Family Office"
                  link="/services"
                />
              </div>

              <div className="col-12 col-lg-6">
                <ActionImage
                  customClass="mb-30"
                  img={ActionE}
                  title="Inversiones en Capital privado"
                  link="/services"
                />
              </div>

              <div className="col-12 col-lg-6">
                <ActionImage
                  customClass="mb-30"
                  img={ActionF}
                  title="Recepción y transmisión de órdenes."
                  link="/services"
                />
              </div>
            </div>
          </div>

          <div className="row mx-0 mt-100">
            <div className="col-12 px-0">
              <div className="text-image">
              </div>
              <TextImage
                customClass="mb-30"
                title="¿Qué nos preguntan?"
                content="Conoce las preguntas y respuestas más frecuentes"
                link="/FAQ"
              />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 px-0">
                <p className="title text-center my-50">Noticias</p>
                <div className="row mx-0">
                  <div className="col-12 col-lg-9">
                    <NoticeCard
                      customClass="mb-20 -line"
                      image={NoticeA}
                      date="- 14 Dic 2018"
                      showtitle={true}
                      title="Menor producción de crudo ‘castiga’ ingresos petroleros de AMLO para 2019"
                      content="La caída en la producción de crudo está impactando en los ingresos petroleros, y  si no se revierte se dificultará el…"
                      link="/home"
                    />
                  </div>

                  <div className="col-12 col-lg-3 d-flex align-items-start">
                    <div className="row h-100">
                      <div className="col-12">
                        <NoticeCard
                          customClass="mb-20 -line"
                          image={NoticeB}
                          date="- 14 Dic 2018"
                          content="Menor producción de crudo ‘castiga’ ingresos petroleros de AMLO para 2019"
                          link="/home"
                        />
                      </div>

                      <div className="col-12 mt-auto">
                        <NoticeCard
                          customClass="mb-20 -line"
                          image={NoticeB}
                          date="- 14 Dic 2018"
                          content="Menor producción de crudo ‘castiga’ ingresos petroleros de AMLO para 2019"
                          link="/home"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex mt-30 px-0">
                  <a className="ml-auto mx-30" href="/news-podcasts">Ver más</a>
                </div>
              </div>
            </div>

          </div>

          <div className="row mx-0 bg-secondary mt-100">
            <div className="col-12 px-0">
              <div className="container my-100">
                <div className="row">
                  <div className="col-12">
                    <p className="title w-color">Videos</p>
                    <p className="w-color">La caída en la producción de crudo está impactando en los ingresos petroleros, y  si no se revierte se dificultará el…</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-lg-4 mb-50">
                    <iframe width="300px" height="200px" src="https://www.youtube.com/embed/FCwEzdlEFpM" frameborder="0" allow="accelerometer; 200pxplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="subtitle w-color">Menor producción de crudo</p>
                    <p className="w-color mb-0">La caída en la producción de crudo está impactando en los ingresos petroleros, y  si no se revierte se dificultará el…</p>
                  </div>

                  <div className="col-12 col-lg-4 mb-50">
                    <iframe width="300px" height="200px" src="https://www.youtube.com/embed/FCwEzdlEFpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="subtitle w-color">Menor producción de crudo</p>
                    <p className="w-color mb-0">La caída en la producción de crudo está impactando en los ingresos petroleros, y  si no se revierte se dificultará el…</p>
                  </div>

                  <div className="col-12 col-lg-4 mb-50">
                    <iframe width="300px" height="200px" src="https://www.youtube.com/embed/FCwEzdlEFpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="subtitle w-color">Menor producción de crudo</p>
                    <p className="w-color mb-0">La caída en la producción de crudo está impactando en los ingresos petroleros, y  si no se revierte se dificultará el…</p>
                  </div>
                </div>

                <div className="row mt-30">
                  <div className="col-12 d-flex">
                    <a className="ml-auto mr-auto" href="/media"><button className="btn -primary">Ver más</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
