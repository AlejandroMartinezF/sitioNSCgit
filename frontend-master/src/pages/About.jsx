import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import Highlight from '../Components/Highlight/Highlight';
import ValuesCommitments from '../Components/ValuesCommitments/ValuesCommitments';
import ExcecutivePreview from '../Components/Executive-preview/Excecutive-preview';

import Building from '../img/building.jpg';

import Claudio from '../img/claudio.jpg';
import Marivi from '../img/marivi.jpg';
import Ignacio from '../img/ignacio.jpg';
import Rafael from '../img/rafael.jpg';
import Isabel from '../img/isabel.jpg';
import Antonio from '../img/antonio.jpg';
import Salvador from '../img/salvador.jpg';
import Daniel from '../img/daniel.jpg';
import Alejandro from '../img/alejandro.jpg';
import Joaquin from '../img/joaquin.jpg';
import Cristina from '../img/cristina.jpg';
import Alberto from '../img/alberto.jpg';
import Raymond from '../img/raymond.jpg';
import Pablo from '../img/pablo.jpg';
import Francisco from '../img/francisco.jpg';
import Hector from '../img/hector.jpg';
import Michel from '../img/michel.jpg';
import Jeronimo from '../img/jeronimo.jpg';
import Javier from '../img/javier.jpg';
import Mariana from '../img/mariana.jpg';
import Rodrigo from '../img/rodrigo.jpg';
import AlbertoA from '../img/albertoa.jpg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container-fluid mx-0 p-0">

        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        <Hero
          page="-about"
          content="Somos la firma de asesoría financiera independiente más antigua de nuestro país. Desde nuestro inicio en 1987 nos hemos especializado en el manejo y asesoría de patrimonios, hasta convertirnos en los líderes del mercado."
        />

        <div className="row mb-100 mx-0">
          <div className="col-12 px-0">
            <Highlight
              title="Historia"
              content="NSC Asesores es socio fundador de la AMAII (Asociación Mexicana de Asesores Independientes en Inversiones, A.C) fundada en 1993. En 2003 la AMAII obtuvo el reconocimiento de la Secretaría de Hacienda como organismo autor regulatorio."
              contentB="Posteriormente recibimos el primer registro ante la CNBV para realizar las funciones de asesoría conforme a la Ley del Mercado de Valores como Asesor en Inversiones Independiente. En 2015 nos asociamos con Julius Baer, uniendo nuestras experiencias en asesoría de alto patrimonio."
              button={false}
              image={Building}
            />
          </div>
        </div>

        <div className="container">

          <div className="row my-100">
            <div className="col-12">
              <p className="subtitle text-center">Ofrecemos a nuestros clientes Asesoría Profesional e Independiente en el manejo y optimización de su patrimonio acorde con sus objetivos personales, a través de Asesores altamente capacitados y con una fuerte actitud de servicio y superación.</p>
            </div>
          </div>

          <div className="row-my-100">
            <div className="col-12">
              <ValuesCommitments />
            </div>
          </div>

          <div className="row mt-100">
            <div className="col-12 col-md-8">
              <p className="title">Principales Ejecutivos</p>
              <p>Contamos con un grupo de profesionales de diferentes generaciones con la experiencia y recursos necesarios para asesorar y manejar el patrimonio de nuestros clientes. Manejamos todo tipo de inversiones líquidas, operaciones sofisticadas dentro del sector bursátil y bancario, incluyendo instrumentos de deuda, acciones cotizadas en Bolsa Valores, sociedades de inversión, instrumentos indizados al tipo de cambio y la inflación, opciones warrants, Exchange Traded Funds, así como una serie de productos alternativos (Bienes Raíces, Private equities, etc.)</p>
            </div>
          </div>
          <div className="row mt-50 mb-100 d-flex justify-content-center">

            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Claudio}
                name="Claudio Núñez Sanchez de la Barquera"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Marivi}
                name="Mariví Esteve de Murga"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Ignacio}
                name="Ignacio Vallina Fabre"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Rafael}
                name="Rafael J. Enecoiz Francos"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Isabel}
                name="Isabel Bouffier Soto"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Antonio}
                name="Antonio Yturbe Bernal"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2 ">
              <ExcecutivePreview
                img={Salvador}
                name="Salvador Pérez Celorio"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Daniel}
                name="Daniel De Laborde"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Alejandro}
                name="Alejandro Garza Wilson"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Joaquin}
                name="Joaquín López Negrete"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Cristina}
                name="Cristina Trejo"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Alberto}
                name="Alberto Compean Linage"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Raymond}
                name="Raymond Chaine Bush"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Pablo}
                name="Pablo Legaspi Lanz"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Francisco}
                name="Francisco Laguardia A."
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Hector}
                name="Héctor Hermosillo V."
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Michel}
                name="Michel Gobera Fajer"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Jeronimo}
                name="Jerónimo Rodríguez Z."
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Javier}
                name="Javier de Robina López de Silanes"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Mariana}
                name="Mariana Núñez Izcoa "
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={Rodrigo}
                name="Rodrigo Román Pastor"
              />
            </div>
            <div className="col-4 col-md-3 col-lg-2 px-2">
              <ExcecutivePreview
                img={AlbertoA}
                name="Alberto Andapia"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
