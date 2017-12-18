import React from 'react';
import { Input, Label, Col, Row, Container } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import Navig from '../Nav';

const Home = () =>
  (
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
          <Col sm={{ size: 8, offset: 2 }}>
            <h1>Encuentra a tu proximo desarrollador</h1>
          </Col>
          <Col sm={2}>
            <a href="oferta" className="btn btn-md btn-danger btn-right">Crear Oferta</a>
          </Col>
        </Row>
        <Row className="spc">
          <Col xs="6" sm="6">
            <h5>En donde?</h5>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Presencial
            </Label>
            <Label check sm={{ offset: 2 }}>
              <Input type="radio" name="radio1" />{' '}
              Remoto
            </Label>
          </Col>
          <Col xs="6" sm="4">
            <h5>Ciudad</h5>
            <Input type="select" name="select" id="ciudadselect">
              <option>1</option>
              <option>2</option>
            </Input>
          </Col>
        </Row>
        <Row className="spc">
          <Col sm="12" md={{ size: 7 }}>
            <h5>Que desarrolle en que lenguaje o framework o tecnologia ?</h5>
            <Input type="select" name="select" id="TipoLenguaje">
              <option>React</option>
              <option>Vue</option>
            </Input>
          </Col>
        </Row>
      </Container>
    </div>
  );

export default Home;
