import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Footer from '../Components/Footer/Footer';
import NscSix from '../Components/Nsc-six/Nsc-six';

const SMTP_HOST = process.env.REACT_APP_SMTP_HOST
const SMTP_USER = process.env.REACT_APP_SMTP_USER
const SMTP_PASSWORD = process.env.REACT_APP_SMTP_PASSWORD
const EMAIL_TO = process.env.REACT_APP_EMAIL_TO
const EMAIL_FROM = process.env.REACT_APP_EMAIL_FROM

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      contact_button: "ENVIAR",
      modal: false,
      modal_title: "",
      modal_body: ""
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({
      contact_button: <Spinner style={{ width: '1rem', height: '1rem' }} />
    });

    window.Email.send({
      Host: SMTP_HOST,
      Username: SMTP_USER,
      Password: SMTP_PASSWORD,
      To: EMAIL_TO,
      From: EMAIL_FROM,
      Subject: "Solicitud de inversión",
      Body: 
        "<p>La siguiente persona está solicitando información mediante el website.</p></br>" +
        "<p>Nombre: " + this.state.name + "</p>" +
        "<p>Correo: " + this.state.email + "</p>" +
        "<p>Teléfono: " + this.state.phone + "</p>" +
        "<p>Mensaje: " + this.state.message + "</p>"
    }).then(() => {
      this.setState({
        modal_title: "Correo enviado con éxito",
        modal_body: "Un personal de ventas se comunicará contigo lo antes posible.",
        contact_button: "Enviar"
      })
      this.toggle();
    }
    ).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (

      <div>
        <Modal size={'md'} centered={true} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.state.modal_title}</ModalHeader>
          <ModalBody>
            <p>{this.state.modal_body}</p>
          </ModalBody>
        </Modal>

        <div className="container-fluid p-0">

          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <div className="container mt-170">
            <div className="row mx-0">
              <div className="col-12">
                <p className="title">Contacto</p>
              </div>
            </div>
            <div className="row mx-0 d-flex justify-content-center">
              <div className="col-12 col-lg-7 px-0 my-50">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.68600049036!2d-99.27064928509411!3d19.382744186912763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2012665b97c5d%3A0x233d4137db7b3dde!2sBosques%20de%20la%20Reforma%201813%2C%20Lomas%20del%20Chamizal%2C%20Cuajimalpa%20de%20Morelos%2C%2005100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1585014812701!5m2!1ses-419!2smx" frameborder={0} style={{ border: 0 }} aria-hidden={false} tabindex={0}>
                </iframe>
              </div>

              <div className="col-12 col-lg-5 px-0">
                <Form onSubmit={this.sendEmail}>
                  <p className="subtitle w-color mb-20">Escríbenos</p>
                  <FormGroup row>
                    <Label for="nombre" sm={12}>Nombre</Label>
                    <Input className="transparent" type="nombre" name="nombre" id="contact name" value={this.state.name} onChange={this.handleName} required/>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={12}>Email</Label>
                    <Input className="transparent" type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleEmail} required/>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phone" sm={12}>Teléfono</Label>
                    <Input className="transparent" type="text" name="phone" id="exampleEmail" value={this.state.phone} onChange={this.handlePhone} required />
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleText" sm={12}>Mensaje</Label>
                    <Input className="transparent" type="textarea" name="text" id="exampleText" value={this.state.message} onChange={this.handleMessage} required/>
                  </FormGroup>
                  <FormGroup check row>
                    <Col className="d-flex justify-content-end mt-50" sm={{ size: 10, offset: 2 }}>
                      <button type="submit" className="btn -outlineWhite">{ this.state.contact_button }</button>
                    </Col>
                  </FormGroup>
                </Form>
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
            <div className="row mb-30">
              <div className="col-12">
                <NscSix />
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
