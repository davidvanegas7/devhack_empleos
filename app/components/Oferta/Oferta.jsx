import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.css';
import { fromJS } from 'immutable';
import Navig from '../Nav';
import SelectMaps from '../SelectMaps';

class Oferta extends Component {

  static propTypes = {
    createJob: PropTypes.func.isRequired,
  };

  static jobState = () => fromJS({
    titulo: '',
    empresa: '',
    email: '',
    telefono: '',
    descripcion: '',
    modalidad: '',
    keywords: '0',
    ciudad: '',
    fecha: '',
  });

  state = {
    jobState: Oferta.jobState(),
  };

  handleChange = (key, value) => {
    console.log(`${key}: ${value}`);
    const jobState = this.state.jobState.set(key, value);
    this.setState({ jobState });
  };

  handleChangex = (evt, key) => {
    const value = evt.target.value;
    console.log(`${key}: ${value}`);
    const jobState = this.state.jobState.set(key, value);
    this.setState({ jobState });
  };

  handleChangeTelefono = (evt) => {
    this.handleChangex(evt, 'telefono');
  }

  handleChangeEmpresa = (evt) => {
    this.handleChangex(evt, 'empresa');
  }

  handleChangeTitulo = (evt) => {
    this.handleChangex(evt, 'titulo');
  }

  handleChangeEmail = (evt) => {
    this.handleChangex(evt, 'email');
  }

  handleChangeDescripcion= (evt) => {
    this.handleChangex(evt, 'descripcion');
  }

  handleChangeModalidad = (evt) => {
    this.handleChangex(evt, 'modalidad');
  }

  handleChangeKeywords = (evt) => {
    this.handleChangex(evt, 'keywords');
  }

  handleChangeCiudad = (value) => {
    const jobState = this.state.jobState.set('ciudad', value);
    this.setState({ jobState });
  }


  handleCreateJob = () => {
    const { createJob } = this.props;
    const myDate = new Date();
    const month = myDate.getMonth() + 1 < 10 ? `0${myDate.getMonth() + 1}` : `${myDate.getMonth() + 1}`;
    const job = this.state.jobState.set('fecha', `${myDate.getDate()}-${month}-${myDate.getFullYear()}`);
    console.log(job.toJS());
    createJob(job.toJS());
  }

  render() {
    return (
      <div>
        <Navig />
        <style jsx>{`
          .spc {
            margin: 40px 0;
          }
        `}
        </style>
        <Container style={{ padding: '2rem' }}>
          <Row className="spc">
            <center>
              <h3>Estudiantes con habilidades practicas</h3>
            </center>
          </Row>
          <Row>
            <center>
              <h1>Agrega tu Oferta de Empleo</h1>
            </center>
          </Row>
        </Container>
        <div>
          <FormGroup row className="spc">
            <Col sm={{ size: 3, offset: 3 }}>
              <h5>Titulo:</h5>
              <Input
                type="text"
                name="titulo"
                id="idTitulo"
                placeholder="Ingresa el titulo"
                onChange={this.handleChangeTitulo}
                value={this.state.jobState.get('titulo')}
              />
            </Col>
            <Col sm={{ size: 3 }}>
              <h5>Nombre de la empresa:</h5>
              <Input
                type="text"
                name="empresa"
                id="idEmpresa"
                placeholder="Ingresa la empresa"
                value={this.state.jobState.get('empresa')}
                onChange={this.handleChangeEmpresa}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <Col sm={{ size: 3, offset: 3 }}>
              <h5>Correo Electronico:</h5>
              <Input
                type="text"
                name="email"
                id="idEmail"
                placeholder="Ingresa el correo electronico"
                value={this.state.jobState.get('email')}
                onChange={this.handleChangeEmail}
              />
            </Col>
            <Col sm={{ size: 3 }}>
              <h5>Celular:</h5>
              <Input
                type="text"
                name="celular"
                id="idCelular"
                placeholder="Ingresa el telefono"
                value={this.state.jobState.get('telefono')}
                onChange={this.handleChangeTelefono}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <Col sm={{ size: 1, offset: 3 }}>
              <h5>Modalidad: </h5>
            </Col>
            <Col sm={{ size: 4 }}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" value="Presencial" onChange={this.handleChangeModalidad} />{' '}
                  Presencial
                </Label>
                <Label check>
                  <Input type="radio" name="radio1" value="Remoto" onChange={this.handleChangeModalidad}  />{' '}
                  Remoto
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <Col sm={{ size: 3, offset: 3 }}>
              <h5>Ciudad: </h5>
              <SelectMaps
                handleChangeCiudad={this.handleChangeCiudad}
              />
            </Col>
            <Col sm={{ size: 4 }}>
              <h5>Lenguaje o framework o tecnologia ?</h5>
            </Col>
            <Col sm={{ size: 3 }}>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                value={this.state.jobState.get('keywords')}
                onChange={this.handleChangeKeywords}
              >
                <option value="0">Seleccione una opcion</option>
                <option value="vue">Vue</option>
                <option value="react">React</option>
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <Col sm={{ size: 6, offset: 3 }}>
              <h5>Descripcion del empleo:</h5>
              <Input
                type="textarea"
                name="descripcion"
                id="idDescripcion"
                placeholder="Ingresa la descripcion del empleo"
                value={this.state.jobState.get('descripcion')}
                onChange={this.handleChangeDescripcion}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <center>
              <button
                className="btn btn-lg btn-danger btn-right"
                onClick={this.handleCreateJob}
              >
                Crear Vacante
              </button>
            </center>
          </FormGroup>
        </div>
      </div>
    );
  }

}

export default Oferta;
