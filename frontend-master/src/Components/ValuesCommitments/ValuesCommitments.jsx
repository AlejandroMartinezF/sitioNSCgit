import React, { Component } from 'react';
import Honesty from '../../img/honestidad.svg'
import Confidentiality from '../../img/confidencialidad.svg'
import Prudency from '../../img/prudencia.svg'
import Professionalism1 from '../../img/profesionalism1.svg'
import Independency from '../../img/independencia.svg'
import Patrimony from '../../img/patrimony.svg'
import Diversity from '../../img/diversity.svg'
import Relationships from '../../img/relationships.svg'
import Coherence from '../../img/coherence.svg'
import Growth from '../../img/growth.svg'
import Professionalism2 from '../../img/profesionalism2.svg'
import Quality from '../../img/Calidad.svg'
import Assets from '../../img/Activos.svg'
import Security from '../../img/Seguridad.svg'
import Ideas from '../../img/ideas.svg'
import Analysis from '../../img/Analisis.svg'
import Heritage from '../../img/Patrimonio.svg'
import Experience from '../../img/Experiencia.svg'
import Government from '../../img/Gobierno.svg'
import Julius from '../../img/Julius.svg'

class ValuesCommitments extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabs: 'values'
    }
  }

  toggleTab = (tab) => {
    this.setState({
      tabs: tab
    })
  }

  render() {
    return (
      <div className="values-commitments">
        <div className="row d-lg-none">
          <div className="col-12 col-md-6">
            <button onClick={() => this.toggleTab('values')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Valores</i></button>            
          </div>
          <div className="col-12 col-md-6">
            <button onClick={() => this.toggleTab('commitment')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Compromisos</i></button>
          </div>
          <div className="col-12 col-md-6">
            <button onClick={() => this.toggleTab('strengths')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Nuestras Fortalezas</i></button>
          </div>
          <div className="col-12 col-md-6">
            <button onClick={() => this.toggleTab('highlights')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Lo que nos distingue</i></button>
          </div>
        </div>
        <div className="image">
        </div>
        {this.state.tabs === 'values' &&
          <div className="content">
            <p className="subtitle">Valores</p>
            <div className="wrapper">
              <div className="element">
                <img className="icon" src={Honesty}></img>
                <div className="text">
                  <p className="mb-0"><b>Honestidad</b></p>
                  <p>Actuar en la verdad y honradez, dentro del marco legal anteponiendo el beneficio del cliente.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Confidentiality}></img>
                <div className="text">
                  <p className="mb-0"><b>Confidencialidad</b></p>
                  <p>Discreción absoluta sobre el conocimiento que se tiene del patrimonio  del cliente.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Prudency}></img>
                <div className="text">
                  <p className="mb-0"><b>Prudencia</b></p>
                  <p>Buscar el equilibrio entre los riesgos y oportunidades que se presentan, cuidando el patrimonio que nos ha sido confiado.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Professionalism1}></img>
                <div className="text">
                  <p className="mb-0"><b>Profesionalismo</b></p>
                  <p>Actuar de manera ética a través de responsabilidad, capacidad y experiencia buscando la excelencia en el servicio.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Independency}></img>
                <div className="text">
                  <p className="mb-0"><b>Independencia de Criterio</b></p>
                  <p>Elegir libremente la mejor opción de inversión, a través de un fuerte sentido de profesionalismo siempre con el fin de buscar beneficios para el cliente.</p>
                </div>
              </div>
            </div>
          </div>
        }

        {this.state.tabs === 'commitment' &&
          <div className="content">
            <p className="subtitle">Compromisos</p>
            <div className="wrapper">
              <div className="element">
                <img className="icon" src={Patrimony}></img>
                <div className="text">
                  <p className="mb-0"><b>Patrimonio</b></p>
                  <p>Sabemos que su patrimonio es muy importante, le ayudamos a conservarlo e incrementarlo con prudencia.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Coherence}></img>
                <div className="text">
                  <p className="mb-0"><b>Coherencia</b></p>
                  <p>Buscamos entender su situación y objetivos, para recomendarle estrategias que se apeguen a estos.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Diversity}></img>
                <div className="text">
                  <p className="mb-0"><b>Diversidad de ideas</b></p>
                  <p>Tenemos recursos de las entidades financieras más prestigiosas e independencia para ofrecerle ideas de diversas fuentes.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Growth}></img>
                <div className="text">
                  <p className="mb-0"><b>Crecimiento</b></p>
                  <p>Obtenemos un crecimiento constante, a partir de la negociación con múltiples instituciones y organismos.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Relationships}></img>
                <div className="text">
                  <p className="mb-0"><b>Relaciones</b></p>
                  <p>Buscamos relaciones de largo plazo con nuestros clientes y proveedores, sostenidas por el esmerado servicio y los buenos resultados.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Professionalism2}></img>
                <div className="text">
                  <p className="mb-0"><b>Profesionalismo</b></p>
                  <p>Buscamos ofrecer el más alto nivel de atención personal y profesional.</p>
                </div>
              </div>
            </div>
          </div>
        }

        {this.state.tabs === 'highlights' &&
          <div className="content">
            <p className="subtitle">Lo que nos distingue</p>
            <div className="wrapper">
              <div className="element">
                <img className="icon" src={Quality}></img>
                <div className="text">
                  <p>Calidad en la toma de decisiones, basado en un colegiado.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Assets}></img>
                <div className="text">
                  <p>Tenemos el mayor número de activos asesorados dentro de los Asesores en Inversiones Independientes en México.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Security}></img>
                <div className="text">
                  <p>Independencia para evitar el conflicto de interés.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Ideas}></img>
                <div className="text">
                  <p>Diversidad de ideas.</p>
                </div>
              </div>
            </div>
          </div>
        }

        {this.state.tabs === 'strengths' &&
          <div className="content">
            <p className="subtitle">Nuestras Fortalezas</p>
            <div className="wrapper">
              <div className="element">
                <img className="icon" src={Analysis}></img>
                <div className="text">
                  <p>Análisis profundo de los mercados.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Heritage}></img>
                <div className="text">
                  <p>Experiencia en manejar patrimonio familiar.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Experience}></img>
                <div className="text">
                  <p>32 años de experiencia en el mercado.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Government}></img>
                <div className="text">
                  <p>Organización basada en el Gobierno Corporativo.</p>
                </div>
              </div>

              <div className="element">
                <img className="icon" src={Julius}></img>
                <div className="text">
                  <p>Socio institucional e internacional, Julius Baer.</p>
                </div>
              </div>
            </div>
          </div>
        }

        <div className="action">
          <button onClick={() => this.toggleTab('values')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Valores</i></button>
          <button onClick={() => this.toggleTab('commitment')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Compromisos</i></button>
          <button onClick={() => this.toggleTab('strengths')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Nuestras Fortalezas</i></button>
          <button onClick={() => this.toggleTab('highlights')} className="btn -secondary w-100 mb-10"><i class="fas fa-eye"> Lo que nos distingue</i></button>
        </div>
      </div>
    );
  }
}

export default ValuesCommitments;