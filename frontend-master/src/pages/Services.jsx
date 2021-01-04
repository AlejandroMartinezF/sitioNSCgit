import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import NscSix from '../Components/Nsc-six/Nsc-six';
import Highlight from '../Components/Highlight/Highlight';
import Footer from '../Components/Footer/Footer';
import { Collapse } from 'reactstrap';

import HighlightC from '../img/highlight-c.jpg'

import ActionImage from '../Components/Action-image/Action-image';
import Management from '../img/action-b.jpg';
import Advisory from '../img/action-a.jpg';
import Family from '../img/action-c.jpg';
import Investment from '../img/action-e.jpg';
import Reception from '../img/action-f.jpg';

class Home extends Component {

  toggleInvestment = () => {
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  }

  toggleAdvisory = () => {
    this.setState((state) => {
      return { isOpenAdvisory: !state.isOpenAdvisory };
    });
  }

  toggleReception = () => {
    this.setState((state) => {
      return { isOpenReception: !state.isOpenReception };
    });
  }

  toggleFamily = () => {
    this.setState((state) => {
      return { isOpenFamily: !state.isOpenFamily };
    });
  }

  toggleCapital = () => {
    this.setState((state) => {
      return { isOpenCapital: !state.isOpenCapital };
    });
  }

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
            page="-services"
            content="Brindamos un servicio integral del patrimonio destinado a quienes buscan gestionar de una forma completa, avanzada, personal y eficaz sus inversiones y consolidar sus activos hacia un futuro deseado."
          />

          <div className="row mx-0">
            <div className="col-12 px-0">
              <Highlight
                center="En NSC sabemos que realizar inversiones acertadas en un ámbito económico tan complejo y con un ritmo de cambio tan acelerado como el que vivimos hoy en día, exige una orientación profesional mucho más especializada que los servicios tradicionales que prestan la instituciones financieras."
                image={HighlightC}
              />
            </div>
          </div>

          <div className="container mt-100">
            <div className="row">
              <div className="col-12 col-lg-6 p-0">
                <img className="simpleImg d-none d-lg-block d-none d-lg-block" src={Management} alt="aprovando" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                <p className="title">Gestión de inversiones.</p>
                <p className="font-s">Buscamos diferentes oportunidades e instrumentos de inversión, para elegir los más adecuados de acuerdo a los intereses del cliente.</p>
                <Collapse isOpen={this.state.isOpen}>
                  <p className="font-s">Como parte importante de nuestros servicios, ofrecemos un proceso continuo de análisis económico y financiero de los mercados, así como de los diversos instrumentos de inversión disponibles. Al ser una firma independiente, tenemos la posibilidad de analizar con absoluta libertad las diferentes oportunidades e instrumentos de inversión, para elegir los más adecuados a los intereses del cliente, sin compromiso con ninguna institución financiera que pudiera condicionar o influir en sus decisiones.</p>
                </Collapse>
                <button className="btn -outlineDark mb-30" onClick={this.toggleInvestment}>Leer más</button>
              </div>
            </div>
            <div className="row d-flex flex-row-reverse">
              <div className="col-12 col-lg-6 p-0">
                <img className="simpleImg d-none d-lg-block" src={Advisory} alt="platica" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                <p className="title">Asesoría de inversiones.</p>
                <p className="font-s">Aconsejamos a nuestros clientes en la toma de decisiones de inversión.</p>
                <Collapse isOpen={this.state.isOpenAdvisory}>
                  <p className="font-s">Proporcionamos de manera oral o escrita, recomendaciones o consejos personalizados o individualizados a un cliente, que le sugieran la toma de decisiones de inversión sobre uno o más productos financieros, lo cual puede realizarse a solicitud de dicho cliente o por iniciativa de NSC.</p>
                </Collapse>
                <button className="btn -outlineDark mb-30" onClick={this.toggleAdvisory}>Leer más</button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 p-0">
                <img className="simpleImg d-none d-lg-block" src={Family} alt="platica" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                <p className="title">Family office.</p>
                <p className="font-s">Planeación integral del patrimonio, tomando en cuenta tanto aspectos financieros como no financieros.</p>
                <Collapse isOpen={this.state.isOpenFamily}>
                  <p className="font-s">Ofrecemos la sana planeación del patrimonio en un sentido organizado, tomando en cuenta desde una correcta estructura patrimonial hasta la revisión integral de los aspectos no financieros involucrados en la administración de un patrimonio.</p>
                </Collapse>
                <button className="btn -outlineDark mb-30" onClick={this.toggleFamily}>Leer más</button>
              </div>
            </div>
            <div className="row d-flex flex-row-reverse">
              <div className="col-12 col-lg-6 p-0">
                <img className="simpleImg d-none d-lg-block" src={Investment} alt="mostrando" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center ">
                <p className="title">Inversiones a capital privado.</p>
                <p className="font-s">Planeación integral del patrimonio, tomando en cuenta tanto aspectos financieros como no financieros.</p>
                <Collapse isOpen={this.state.isOpenCapital}>
                  <p className="font-s">Buscamos y acercamos las mejores oportunidades de bienes raíces, private equity, venture capital y deuda privada (leer más) Acercamos proyectos y oportunidades de capital privado con el fin de obtener un portafolio diversificado que se beneficia de las características únicas de los mercados privados.</p>
                </Collapse>
                <button className="btn -outlineDark mb-30" onClick={this.toggleCapital}>Leer más</button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 p-0">
                <img className="simpleImg d-none d-lg-block" src={Reception} alt="mostrando" />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center ">
                <p className="title">Recepción de instrucciones y transmisión de órdenes.</p>
                <p className="font-s">Recepción de ordenes para una eficiente y eficaz ejecución en el mercado de valores.</p>
                <Collapse isOpen={this.state.isOpenReception}>
                  <p className="font-s">Podemos recibir instrucciones y transmitir las órdenes correspondientes que recibamos de nuestros clientes, a los intermediarios del mercado de valores o instituciones financieras del exterior, de acuerdo al mandato otorgado por estos últimos, en el que nos encontramos facultados para girar instrucciones a nombre y por cuenta de estos a los Intermediarios del mercado de valores o instituciones financieras del exterior del mismo tipo para la celebración de operaciones con valores.</p>
                </Collapse>
                <button className="btn -outlineDark mb-30" onClick={this.toggleReception}>Leer más</button>
              </div>
            </div>

            <div className="container my-100">
              <div className="row mb-30 mt-30">
                <div className="col-12">
                  <p className="title text-center"> Las 6 de NSC</p>
                  <p className="text-center">Entérate de las últimas y más relevantes noticias de ámbito financiero.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <NscSix />
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
