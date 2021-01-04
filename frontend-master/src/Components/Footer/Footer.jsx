import React, { Component } from 'react';
import LogoB from '../../img/logo-b.svg'

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container px-0">
            <div className="section -logo">
              <img className="mb-30" src={LogoB} alt="" />
            </div>

            <div className="section">
              <p className="subtitle"><b>Ubicación</b></p>
              <p>Av. Bosques de Reforma 1813, Piso 10, Lomas de Vista Hermosa , C.P 05100, Ciudad de México. Tel. 52.51.43.99 Fax: 52.51.86.57 E-Mail:nsc@nscasesores.com</p>
            </div>

            <div className="section">              
              <div className="row mx-0">
                <div className="col-12 col-md-6 d-flex flex-column mb-20">
                  <p className="subtitle"><b>Secciones</b></p>
                  <a href="/home">NSC</a>
                  <a href="/about">¿Quiénes somos?</a>
                  <a href="/services">¿Qué ofrecemos?</a>
                  <a href="/media">Media</a>
                  <a href="/news-podcasts">Noticias y Podcasts</a>
                  <a href="/links">Ligas de interés</a>
                  <a href="">Aviso de Privacidad</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text text-center mb-0">NSC ASESORES, S.C., ASESOR EN INVERSIONES INDEPENDIENTE</p>
        </div>
      </>
    );
  }
}

export default Footer;