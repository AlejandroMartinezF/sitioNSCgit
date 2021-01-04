import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

import VideoCard from '../Components/Video-card/Video-card';
import Footer from '../Components/Footer/Footer';
import NscSix from '../Components/Nsc-six/Nsc-six';

import LogoWS from '../img/logo-wallstreet.jpg';
import LogoTE from '../img/logo-theeconomist.jpg';
import LogoBB from '../img/logo-BB.jpg';
import LogoFT from '../img/logo-FT.jpg';
import LogoCNN from '../img/logo-CNN.jpg';
import LogoHA from '../img/logo-haver.jpg';



class News extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <div>
        <div className="container-fluid px-0">

          <div className="row mx-0">
            <div className="col-12 px-0">
              <Header />
            </div>
          </div>

          <Hero
            page="-video"
            content="En NSC estamos convencidos que el conocimiento es la llave del éxito, es por eso que te compartimos algunos de los temas más importantes en el mercado financiero" />


          <div className="container">
            <div className="row my-50 mx-0 d-flex justify-content-center">
              <div className="col-12 col-lg-8">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/FCwEzdlEFpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" al lowfullscreen></iframe>
                <p className="title">Menor producción de crudo</p>
                <p className="mb-30">La caída en la producción de crudo está impactando en los ingresos petroleros, y si no se revierte se dificultará el cumplimiento de las metas fiscales para el presente año y podría propiciar nuevos recortes al gasto.</p>
              </div>
              <div className="row mt-50 mx-0 d-flex justify-content-center">
                <div className="col-12 col-md-3">
                  <iframe className="w-100" src="https://www.youtube.com/embed/f_c1QCPDlfE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" al lowfullscreen></iframe>
                </div>
                <div className="col-12 col-md-9 d-flex flex-column justify-content-center">
                  <p className="title">¿Cómo funciona la bolsa mexicana de valores?</p>
                  <p className="mb-30">Te haz preguntado, ¿Como funciona la BMV, que es, y como se invierte? en este video te queremos trasmitir la idea, de lo que es, sus funciones y regulaciones de la Bolsa de Valores de México.</p>
                </div>
              </div>
              <div className="row mt-50 mx-0 d-flex justify-content-center">
                <div className="col-12 col-md-3">
                  <iframe className="w-100" src="https://www.youtube.com/embed/skK1-4Ss6bI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" al lowfullscreen></iframe>
                </div>
                <div className="col-12 col-md-9 d-flex flex-column justify-content-center">
                  <p className="title">Introducción al Mundo de las Inversiones</p>
                  <p className="mb-30">Aprende sobre el mundo de las inversiones, descubre sus beneficios y aplica estos conocimientos para ser un elemento...</p>
                </div>
              </div>
              <div className="row mt-50 mx-0 d-flex justify-content-center">
                <div className="col-12 col-md-3">
                  <iframe className="w-100" src="https://www.youtube.com/embed/JCMYjez93pk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" al lowfullscreen></iframe>
                </div>
                <div className="col-12 col-md-9 d-flex flex-column justify-content-center">
                  <p className="title">¿Cómo prepararte para una recesión económica?</p>
                  <p className="mb-30">Descubre los pasos necesarios para preparate en caso de una crisis económica mundial, no dejes que este tipo de situaciones...</p>
                </div>
              </div>
            </div>
          </div >

          <div className="container my-100">
            <div className="row">
              <div className="col-12">
                <p className="title d-flex justify-content-center">Fuentes Financieras</p>
              </div>
            </div>


            <div className="row">
              <div className="col-4 col-lg-2">
                <img className="w-100" src={LogoWS} alt="Wall Street Journal Logo" />
              </div>
              <div className="col-4 col-lg-2">
                <img className="w-100" src={LogoTE} alt="Wall Street Journal Logo" />
              </div>
              <div className="col-4 col-lg-2">
                <img className="w-100" src={LogoFT} alt="Wall Street Journal Logo" />
              </div>
              <div className="col-4 col-lg-2">
                <img className="w-100" src={LogoHA} alt="Wall Street Journal Logo" />
              </div>
              <div className="col-4 col-lg-2">
                <img className="w-100" src={LogoCNN} alt="Wall Street Journal Logo" />
              </div>
              <div className="col-4 col-lg-2">
                <img className="w-100" src={LogoBB} alt="Wall Street Journal Logo" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row my-100">
              <div className="col-12">
                <p className="title text-center">Las 6 de NSC</p>
                <p className="text-center">Entérate de las últimas y más relevantes noticias de ámbito financiero.</p>
              </div>
            </div>
            <div className="row mx-0 mb-30">
              <div className="col-12">
                <NscSix />
              </div>
            </div>
          </div>

          <Footer />
        </div >
      </div >
    );
  }
}

export default News;
