import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import LinkCardComponent from '../Components/LinkCard/LinkCard';

//LOGOS
import WSJ from '../img/link-logo-wsj.png';
import FT from '../img/link-logo-financial-times.png';
import TE from '../img/link-logo-economist.png';
import HA from '../img/link-logo-haver-analytics.png';
import CNN from '../img/link-logo-cnn.png';
import SCOTIA from '../img/link-logo-scotia.png';
import CITI from '../img/link-logo-citi.png';
import BBVA from '../img/link-logo-bbva.png';
import SANTANDER from '../img/link-logo-santander.png';
import INBURSA from '../img/link-logo-inbursa.png';
import JP from '../img/link-logo-jp.png';
import BM from '../img/link-logo-bolsa.png';
import INEGI from '../img/link-logo-inegi.png';
import Yahoo from '../img/link-logo-yahoo.png';
import Bloom from '../img/link-logo-bloom.png';
import CBOE from '../img/link-logo-cboe.png';
import CME from '../img/link-logo-cme.png';
import MexDer from '../img/link-logo-mexder.png';
import GBM from '../img/link-logo-gbm.jpg';
import UBS from '../img/link-logo-ubs.jpg';
import Raymond from '../img/link-logo-raymond.jpg';
import Thomson from '../img/link-logo-thomson.jpg';
import Invex from '../img/link-logo-invex.jpg';
import Global from '../img/link-logo-global.jpg';

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
            page="-links"
            content="Queremos mantenerte cerca de la información más importante y relevante para ti y tu portafolio" />

          <div className="container my-100">
            <div className="row">
              <div className="col-12">
                <p className="title d-flex">Ligas de interés</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-50">
                <p className="subtitle -bold mb-30">Noticias:</p>
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.wsj.com/"
                  img={WSJ}
                  title="The Wall Street Journal"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.ft.com/?segmentId=57e17413-33ff-0832-f231-5b3ab26efcb2&ds_medium=cpc&ds_rl=1266218&ds_rl=1266218&gclid=Cj0KCQjwncT1BRDhARIsAOQF9LlC_0QXhGDEVHGvmn3oV9YnvBLzgQftoymk1bd8cwc7dvZTBT4iYoEaAgASEALw_wcB&gclsrc=aw.ds&countryCode=MEX"
                  img={FT}
                  title="Financial Times"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.economist.com/"
                  img={TE}
                  title="The Economist"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.haver.com/"
                  img={HA}
                  title="Haver Analytics"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://edition.cnn.com/"
                  img={CNN}
                  title="CNN"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-50">
                <p className="subtitle -bold mb-30">Acceso a cuentas:</p>
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.scotiainlatrade.com/servlets/Scotiatrade/inlatrade/scotiatradeDB.htm"
                  img={SCOTIA}
                  title="Scotiabank"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.banamex.com/"
                  img={CITI}
                  title="Citibanamex"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.bbva.mx/"
                  img={BBVA}
                  title="BBVA Bancomer"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.santander.com.mx/"
                  img={SANTANDER}
                  title="Santander"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.inbursa.com/portal/"
                  img={INBURSA}
                  title="Inbursa"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://secure05a.chase.com/web/auth/?treatment=jpo&newstoken=false&fccreqid=MOLLogon&authfailed=true#/logon/logon/chaseOnline"
                  img={JP}
                  title="J.P. Morgan"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-50">
                <p className="subtitle -bold mb-30">Cotizaciones nacionales:</p>
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.bmv.com.mx/"
                  img={BM}
                  title="BMV"
                />
              </div>

              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://gbm.com/en/home/"
                  img={GBM}
                  title="Grupo Bursatil Mexicano"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-50">
                <p className="subtitle -bold mb-30">Estadísticas nacionales: INEGI</p>
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.inegi.org.mx/"
                  img={INEGI}
                  title="INEGI Home"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.inegi.org.mx/sistemas/bie/"
                  img={INEGI}
                  title="Banco de Información Económica"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-50">
                <p className="subtitle -bold mb-30">Cotizaciones internacionales:</p>
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://finance.yahoo.com/?guccounter=1"
                  img={Yahoo}
                  title="Yahoo! Finance"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.bloomberg.com/"
                  img={Bloom}
                  title="Bloomberg"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-50">
                <p className="subtitle -bold mb-30">Opciones:</p>
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.cboe.com/"
                  img={CBOE}
                  title="Chicago Board Options Exchange"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://www.cmegroup.com/"
                  img={CME}
                  title="Chicago Mercantile Exchange"
                />
              </div>
              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="http://www.mexder.com.mx/wb3/wb/MEX"
                  img={MexDer}
                  title="MexDer"
                />
              </div>

              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://onlineservices.ubs.com/olsauth/ex/pbl/ubso/dl#login"
                  img={UBS}
                  title="Union Bank of Switzerland"
                />
              </div>

              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://clientaccess.rjf.com/"
                  img={Raymond}
                  title="Raymond James"
                />
              </div>

              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://trkdpro.thomsonreuters.com/login/classic.html"
                  img={Thomson}
                  title="Thomson Reuters"
                />
              </div>

              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://asesoresweb.invex.com/"
                  img={Invex}
                  title="Invex"
                />
              </div>

              <div className="col-6 col-md-2 px-0">
                <LinkCardComponent
                  link="https://nsc.globalhou.com/login.aspx?ReturnUrl=%2fdefault.aspx"
                  img={Global}
                  title="Global Financial Services"
                />
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
