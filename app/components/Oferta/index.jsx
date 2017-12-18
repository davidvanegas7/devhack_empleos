import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import Navig from '../Nav';

const Oferta = () =>
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
          <center>
            <h1>Agrega tu Oferta de Empleo</h1>
          </center>
        </Row>
      </Container>
      <Form>
        <FormGroup row className="spc">
          <Col sm={{ size: 3, offset: 3 }}>
            <h5>Titulo:</h5>
            <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
          <Col sm={{ size: 3 }}>
            <h5>Nombre de la empresa:</h5>
            <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row className="spc">
          <Col sm={{ size: 3, offset: 3 }}>
            <h5>Correo Electronico:</h5>
            <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
          <Col sm={{ size: 3 }}>
            <h5>Celular:</h5>
            <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row className="spc">
          <Col sm={{ size: 1, offset: 3 }}>
            <h5>Modalidad: </h5>
          </Col>
          <Col sm={{ size: 4 }}>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Presencial
            </Label>
            <Label check sm={{ offset: 1 }}>
              <Input type="radio" name="radio1" />{' '}
              Remoto
            </Label>
          </Col>
        </FormGroup>
        <FormGroup row className="spc">
          <Col sm={{ size: 3, offset: 3 }}>
            <h5>Ciudad: </h5>
            <Input type="select" name="select" id="ciudadselect">
              <option>1</option>
              <option>2</option>
            </Input>
          </Col>
          <Col sm={{ size: 4 }}>
            <h5>Que desarrolle en que lenguaje o framework o tecnologia ?</h5>
          </Col>
          <Col sm={{ size: 3 }}>
            <Input type="select" name="select" id="ciudadselect">
              <option>1</option>
              <option>2</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row className="spc">
          <Col sm={{ size: 6, offset: 3 }}>
            <h5>Descripcion del empleo:</h5>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row className="spc">
          <center>
            <button className="btn btn-lg btn-danger btn-right">Comunidad</button>
          </center>
        </FormGroup>
      </Form>
    </div>
  );

export default Oferta;
