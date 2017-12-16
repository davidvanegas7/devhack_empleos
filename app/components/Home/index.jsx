import React from 'react';
import { Input, Label, Col, Row, Container } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import imageLogoDevhack from '../../../assets/img/logo.png';

//      <Button color="primary">primary</Button>{' '}
const Home = () =>
  (
    <div>
      <img src={imageLogoDevhack} alt="logo" />
      <Container style={{ padding: '2rem' }}>
        <Row>
          <center>
            <h3>Estudiantes con habilidades practicas</h3>
          </center>
        </Row>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1>Encuentra a tu proximo desarrollador</h1>
          </Col>
          <Col sm={2}>
            <button className="btn btn-lg btn-danger btn-right">Hola</button>
          </Col>
        </Row>
        <Row row tag="Ciudad" inline sm={6}>
          <center>
            <Col sm={6}>
              <Row>
                <Col sm={3}>
                  <Row>
                    <Input type="checkbox" id="radiometodociudad" />{' '}
                    Presencial
                  </Row>
                </Col>
                <Col sm={3}>
                  <Row>
                    <Input type="checkbox" id="radiometodociudad" />{' '}
                    Remoto
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                <Label for="ciudadselect" sm={2}>Ciudad</Label>
                <Col sm={4}>
                  <Input type="select" name="select" id="ciudadselect">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </Col>
              </Row>
            </Col>
          </center>
        </Row>
        <Col sm={6}>
          <Row tag="TipoLenguaje" row>
            <Label>Que desarrolle en que lenguaje o framework o tecnologia ?</Label>
            <Input type="select" name="select" id="TipoLenguaje">
              <option>React</option>
              <option>Vue</option>
            </Input>
          </Row>
        </Col>
      </Container>
    </div>
  );

export default Home;
