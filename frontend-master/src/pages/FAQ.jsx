import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';


class FAQ extends Component {

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
          page="-faq"
          content="¿Qué nos preguntan?"
        />

        <div className="container mb-100">
          <div className="row mx-0">
            <div className="col-12">
              <p className="title my-50">Preguntas Frecuentes</p>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-1">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿Qué es un asesor en inversiones?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-1">
                  <Card>
                    <CardBody>
                      El asesor en inversiones es un profesional que usa sus conocimientos y experiencia en el manejo de los portafolios de inversión de sus clientes.
                      <br /><br />
                      La figura del asesor en inversiones es conocida en otros países como Investment Advisor y ha tenido tal éxito que, en la actualidad, la mayoría de los patrimonios más importantes en el mundo reciben asesoría de alguno de ellos. El asesor diseña estrategias de inversión basadas en los objetivos del cliente, de acuerdo con su tolerancia al riesgo y con su muy personal filosofía de inversión, aplicando dichas estrategias a las cuentas de sus clientes y actualizándolas de acuerdo con los cambios que surgen en los mercados financieros.
                      <br /><br />
                      NSC Asesores es la firma con mayor número de clientes dentro de la Asociación Mexicana de Asesores Independientes de Inversiones en Valores.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>

            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-2">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿A qué tipo de inversionistas apoya NSC Asesores?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-2">
                  <Card>
                    <CardBody>
                      Patrimonios personales<br /><br />
                      <b>NSC Asesores</b> apoya y orienta a inversionistas que han llegado a formar patrimonios de consideración y que desean conservarlo y hacerlo crecer con la mayor seguridad posible.
                      <br /><br />
                      Para ello, el manejo de un patrimonio debe tener objetivos de largo plazo, y no el de realizar operaciones especulativas de corto plazo, ya que las tendencias de los mercados pueden tener distorsiones que se compensan y minimizan con el tiempo.
                      <br /><br />
                      Asimismo, con el fin de reducir riesgos en las inversiones, es conveniente que el portafolios de inversión se diversifique adecuadamente, pues esta diversificación permite lograr un riesgo general menor.
                      <br /><br /><br />
                      Inversionistas institucionales
                      <br /><br />
                      <b>NSC Asesores</b> otorga también asesoría a sociedades de inversión, a fondos de pensiones, a compañías de seguros para sus reservas técnicas, así como a empresas para su tesorería.
                      <br /><br />
                      Para estas entidades conocidas como inversionistas institucionales, el apoyo de <b>NSC Asesores</b> representa un beneficio en tiempo y dinero, ya que se ahorra la integración de un costoso equipo de ejecutivos de finanzas.
                      <br /><br />
                      Más que todo, el apoyo de los asesores en inversión de <b>NSC Asesores</b> garantiza que los capitales estén manejados con la independencia y el profesionalismo requerido, dando a sus clientes institucionales el servicio particular que les corresponde.
                      <br /><br />
                      NSC Asesores al contrario de un banco o una casa de bolsa, la ley le prohibe comprar en firme por cuenta propia un instrumento financiero para colocarlo posteriormente, hecho que evita conflicto de intereses en lo que concierne a la selección de los instrumentos de inversión.
                      <br /><br />
                      El elevado monto de capitales manejados, así como la amplia diversificación, de sus fuentes de cotizaciones, permite a <b>NSC Asesores</b> obtener en beneficio de sus clientes institucionales, las mejores tasas en los mercados de dinero y los mejores precios en los títulos de deuda de largo plazo.
                      <br /><br />
                      <b>NSC Asesores</b> estructura para el inversionista institucional estrategias sofisticadas para optimizar el rendimiento dentro de los parámetros de inversión establecidos por cada uno, aprovechándose de todos los instrumentos de cobertura y arbitraje existentes.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>

            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-3">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿Por qué manejar mi cuenta con NSC Asesores?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-3">
                  <Card>
                    <CardBody>
                      Cuando un cliente confía a NSC Asesores su patrimonio líquido, está contratando a un grupo de profesionales que lo asesorará tanto en la definición de sus estrategias de inversión como en la instrumentación y seguimiento de las mismas.
                      <br /><br />
                      NSC Asesores maneja en las instituciones financieras activos globales de magnitudes muy superiores a los que maneja un inversionista individual. Esto favorece al cliente, ya que al aparecer su cuenta como parte de este grupo se beneficia con menores comisiones de corretaje y mejores tasas de interés que si lo hiciera directamente con la institución financiera.
                      <br /><br />
                      El interés primordial de NSC Asesores es ayudar al cliente a lograr sus objetivos y optimizar sus rendimientos.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>

            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-4">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿Dónde se encuentra depositado el dinero del cliente, y a qué riesgos queda expuesto?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-4">
                  <Card>
                    <CardBody>
                      Los fondos manejados por <b>NSC Asesores</b> se encuentran depositados a nombre de cada uno de los clientes en cuentas individuales independientes, en las diferentes Casas de Bolsa o Bancos, y el cliente es el único que puede retirar fondos o valores conforme a lo establecido en el artículo 226 y 227 de la Ley del Mercado de Valores.
                    <br /><br />
                      NSC Asesores maneja en las instituciones financieras activos globales de magnitudes Para el manejo de la cuenta, el cliente otorga a <b>NSC Asesores</b>  un poder limitado exclusivamente para girar instrucciones a las instituciones financieras de compra y venta de los valores que integran su portafolios de inversión. Por lo tanto, <b>NSC Asesores</b>  no puede retirar efectivo ni valores de las cuentas de los clientes.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>

            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-5">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿En qué se basa NSC Asesores para tomar decisiones de inversión sobre el portafolios del cliente?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-5">
                  <Card>
                    <CardBody>
                      NSC Asesores toma las decisiones sobre el portafolios de inversión de un cliente con base en dos factores:
                      <br /><br />
                      El Factor Inherente al Cliente, que considera, entre otras cosas, de qué tipo de inversionista se trata, sus características personales, sus objetivos y estrategias de inversión y sus requerimientos de liquidez.
                      El Factor de Análisis, externo al cliente, que consta del análisis fundamental y el análisis técnico.
                      <br /><br />
                      El análisis fundamental se refiere a la situación financiera de los mercados; al análisis del entorno macro y microeconómico del país, de las condiciones financieras de las empresas, de las tasas de interés, etcétera.
                      <br /><br />
                      El análisis técnico estudia las tendencias de los mercados y de los volúmenes negociados, analiza los comportamientos históricos y estima los comportamientos futuros.
                      <br /><br />
                      Para realizar lo anterior, NSC Asesores cuenta con sistemas especializados de información y con un grupo profesional de analistas que, al considerar y ponderar todos los factores involucrados, realiza las inversiones en los portafolios de sus clientes.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>

            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-6">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿Qué información recibe el cliente sobre su portafolios de inversión?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-6">
                  <Card>
                    <CardBody>
                      Los clientes reciben mensualmente el estado de cuenta emitido por las instituciones financieras donde se encuentran sus cuentas de inversión. Este estado de cuenta muestra los movimientos efectuados durante el mes, así como la posición de la cuenta al final de ese periodo.
                      <br /><br />
                      Asimismo, con el objeto de que el cliente tenga información completa sobre su portafolios de inversión, NSC Asesores genera un estudio periódico que envía al cliente, el cual incluye un análisis de su posición por tipo de instrumento y el rendimiento de su cuenta durante el periodo.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>

            <div className="col-12">
              <div className="collapse-question">
                <Button className="question-bar" id="toggler-7">
                  <div className="col-1">
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div className="col-11 d-flex justify-content-start">
                    <p className="question">¿Recibe NSC Asesores alguna retribución de las casas de bolsa o bancos?</p>
                  </div>
                </Button>
                <UncontrolledCollapse toggler="toggler-7">
                  <Card>
                    <CardBody>
                      Para evitar conflictos de interés en la toma de decisiones, la Comisión Nacional de Valores, la Asociación Mexicana de Asesores Independientes de Inversiones en Valores y el Art. 226 y 227 de la Ley del Mercado de Valores (el cual rige el marco de comportamiento de los asesores en inversiones), prohíben estrictamente que un asesor reciba cualquier tipo de remuneración por parte de las instituciones financieras o de las emisoras.
                    <br /><br />
                    Los ingresos de <b>NSC Asesores</b> provienen única y exclusivamente de los honorarios pactados con el cliente, y éstos se definen con base en un porcentaje fijo sobre el monto total de la cuenta asesorada.
                    <br /><br />
                    De esta manera, los incentivos económicos de <b>NSC Asesores</b> están en función de la preservación y el crecimiento del patrimonio del cliente, lo cual implica una completa armonía entre los objetivos de ambos.
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>
            </div>
          </div>

          <div className="row mt-50">
            <div className="col-12">
              <p className="text-center">Si quieres saber más, ingresa a nuestros videos</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <a href="/media"><button className="btn -outlineDark">Ver videos</button></a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FAQ;
