import React, { Component } from 'react';

class CarouselComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div className="home-carousel">
        <div id="carouselExampleIndicatorsHome" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner home">
            <div class="carousel-item active">
              <div className="content -a">
                <div className="textWrapp h-100">
                  <h1 className="h1 text-center c-white w-100">La primera empresa de Asesoría Financiera Independiente en México</h1>
                  <a href="/about" target="blank"><button className="btn -outlineWhite mt-30">Leer más</button></a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="content -b">
                <div className="textWrapp h-100">
                  <h1 className="h1 text-center c-white w-100">Empresa líder en el manejo y asesoría de patrimonios</h1>
                  <a href="/about" target="blank"><button className="btn -outlineWhite mt-30">Leer más</button></a>
                </div>
              </div>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicatorsHome" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicatorsHome" data-slide-to="1"></li>
          </ol>
        </div>
      </div>
    );
  }
}
export default CarouselComponent;