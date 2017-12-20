import React, { Component } from 'react';
import { Input, Label, Col, Row, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import 'bootstrap/dist/css/bootstrap.css';
import { fromJS, List } from 'immutable';
import Navig from '../Nav';
import SelectMaps from '../SelectMaps';
import Job from './Job/Job';

class Home extends Component {

  static propTypes = {
    fetchJobs: PropTypes.func.isRequired,
    jobsData: ImmutablePropTypes.map.isRequired,
  };

  static homeState = () => fromJS({
    ciudad: '',
    modalidad: 'Remoto',
    keywords: '0',
    job: List(),
    job2: {},
  });

  state = {
    job: undefined,
    showDialog: false,
    homeState: Home.homeState(),
  };

  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  componentWillReceiveProps(nextProps) {
    const { fetchJobs } = this.props;
    const { jobsData } = nextProps;
    const jobs = this.props.jobsData.get('jobs');
    const homeState = this.state.homeState.set('job', jobs);
    this.setState({ homeState });
    if (!jobsData.get('postsLoading') && jobsData.get('refresh')) {
      console.log('¡Entró!');
      fetchJobs();
    }
  }

  filtering = (atrb) => {
    console.log(`'${atrb}'`);
    const job2 = this.state.homeState.get('job')
    .filter(job => job.get(atrb) === this.state.homeState.get(atrb))
    .map(job => (
      <Job
        key={job.get('id')}
        id={job.get('id')}
        job={job}
      />
    ))
    .toJS();
    console.log(this.state.homeState.get('job'));
    const homeState = this.state.homeState.set('job2', job2);
    this.setState({ homeState });
  }


  handleChange = (evt, key) => {
    const value = evt.target.value;
    const homeState = this.state.homeState.set(key, value);
    this.filtering(key);
    this.setState({ homeState });
  };

  handleChangeModalidad = (evt) => {
    this.handleChange(evt, 'modalidad');
  }

  handleChangeKeywords = (evt) => {
    this.handleChange(evt, 'keywords');
  }

  handleChangeCiudad = (value) => {
    const homeState = this.state.homeState.set('ciudad', value);
    this.setState({ homeState });
    this.filtering('ciudad');
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
                <Input type="radio" name="radio1" value="Presencial" onChange={this.handleChangeModalidad} />{' '}
                Presencial
              </Label>
              <Label check sm={{ offset: 2 }}>
                <Input type="radio" name="radio1" value="Remoto" onChange={this.handleChangeModalidad} />{' '}
                Remoto
              </Label>
            </Col>
            <Col xs="6" sm="4">
              <h5>Ciudad</h5>
              <SelectMaps handleChangeCiudad={this.handleChangeCiudad} />
            </Col>
          </Row>
          <Row className="spc">
            <Col sm="12" md={{ size: 7 }}>
              <h5>Que desarrolle en que lenguaje o framework o tecnologia ?</h5>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                value={this.state.homeState.get('keywords')}
                onChange={this.handleChangeKeywords}
              >
                <option value="0">Seleccione una opcion</option>
                <option value="vue">Vue</option>
                <option value="react">React</option>
              </Input>
            </Col>
          </Row>
          <Row className="spc">
            <Col sm={{ offset: 2 }}>
              {this.state.homeState.get('job2')}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Home;
