import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';
import { Input, Dropdown, RadioGroup, RadioButton } from 'react-toolbox/lib';
import ImmutablePropTypes from 'react-immutable-proptypes';
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
    ciudad: '',
    descripcion: '',
    modalidad: '',
    keywords: '',
  });

  state = {
    jobState: Oferta.jobState(),
  };

  handleChange = (key, value) => {
    console.log(`${key}: ${value}`);
    const jobState = this.state.jobState.set(key, value);
    this.setState({ jobState });
  };

  handleCreateJob = () => {
    const { createJob } = this.props;
    createJob(this.state.jobState.toJS());
  }

  render() {
    const tecnologies = [
      { value: 'vue', label: 'Vue.js' },
      { value: 'react', label: 'React' },
      { value: 'java', label: 'Java' },
      { value: 'golang', label: 'Golang' },
    ];
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
                onChange={this.handleChange.bind(this, 'titulo')}
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
                onChange={this.handleChange.bind(this, 'empresa')}
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
                onChange={this.handleChange.bind(this, 'email')}
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
                onChange={this.handleChange.bind(this, 'telefono')}
              />
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <Col sm={{ size: 1, offset: 3 }}>
              <h5>Modalidad: </h5>
            </Col>
            <Col sm={{ size: 4 }}>
              <RadioGroup name="modalidad" value={this.state.jobState.get('modalidad')} onChange={this.handleChange.bind(this, 'modalidad')} >
                <RadioButton label="Presencial" value="Presencial" />
                <RadioButton label="Remoto" value="Remoto" />
              </RadioGroup>
            </Col>
          </FormGroup>
          <FormGroup row className="spc">
            <Col sm={{ size: 3, offset: 3 }}>
              <h5>Ciudad: </h5>
              <SelectMaps
                handleChange={this.handleChange.bind(this, 'ciudad')}
                handleSelect={this.handleChange.bind(this, 'ciudad')}
                value={this.state.jobState.get('ciudad')}
              />
            </Col>
            <Col sm={{ size: 4 }}>
              <h5>Que desarrolle en que lenguaje o framework o tecnologia ?</h5>
            </Col>
            <Col sm={{ size: 3 }}>
              <Dropdown
                auto
                onChange={this.handleChange.bind(this, 'keywords')}
                source={tecnologies}
                value={this.state.jobState.get('keywords')}
              />
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
                onChange={this.handleChange.bind(this, 'descripcion')}
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
