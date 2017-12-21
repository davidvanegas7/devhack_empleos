import React, { Component } from 'react';
import { Input, Label, Col, Row, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import 'bootstrap/dist/css/bootstrap.css';
import { fromJS, List } from 'immutable';
import Job from './Job/Job';
import Navig from '../Nav/container';
import SelectMaps from '../SelectMaps';
import Modal from './Modal/container';

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
    jobmodal: undefined,
    showForm: false,
    showDialog: false,
    filters: List(),
  });

  state = {
    homeState: Home.homeState(),
  };

  componentDidMount() {
    document.title = 'Devhack - Home';
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

  useFilter = (filterValue, value) => {
    const filtersState = this.state.homeState.get('filters');
    if (value !== '' && value !== '0' && value !== 0) {
      const index = (filtersState.indexOf(filterValue));
      if (index === -1) {
        const filters = filtersState.push(filterValue);
        const homeState = this.state.homeState.set('filters', filters);
        this.setState({ homeState }, () => this.filtering());
      } else {
        this.filtering();
      }
    } else {
      const index = filtersState.indexOf(filterValue);
      const filters = filtersState.remove(index);
      const homeState = this.state.homeState.set('filters', filters);
      this.setState({ homeState }, () => this.filtering());
    }
  }

  clean = () => {
    const homeS = Home.homeState();
    const homeState = homeS.set('job', this.state.homeState.get('job'));
    this.setState({ homeState }, this.forceUpdate());
  }

  //      for (const filter in Object.values(filters)) {
  filtering = () => {
    const filters = this.state.homeState.get('filters');
    const job2 = this.state.homeState.get('job')
    .filter(job => {
      let valid = true;
      filters.forEach((filter) => {
        if (job.get(filter) !== this.state.homeState.get(filter)) {
          valid = false;
        }
      });
      return valid;
    })
    .map(job => (
      <Job
        key={job.get('id')}
        id={job.get('id')}
        job={job}
        viewJob={this.handleViewJob}
      />
    ))
    .toJS();
    console.log(job2.length);
    if (job2.length === 0) {
      const jobx = (
        <div>
          <h3>No hay vacantes que cumplan con la busqueda asignada</h3>
        </div>
      );
      const homeState = this.state.homeState.set('job2', jobx);
      this.setState({ homeState });
    } else {
      const homeState = this.state.homeState.set('job2', job2);
      this.setState({ homeState });
    }
  }


  handleChange = (evt, key) => {
    const value = evt.target.value;
    const homeState = this.state.homeState.set(key, value);
    this.setState({ homeState }, () => this.useFilter(key, value));
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
    this.useFilter('ciudad', value);
  }

  handleViewJob = (id, job) => {
    const homeState = this.state.homeState.set('jobmodal', job.set('id', id))
    .set('showForm', true);
    console.log(homeState);
    this.setState({
      homeState,
    });
  };

  handleShowForm = () => {
    const homeState = this.state.homeState.set('showForm', true);
    this.setState({ homeState });
  };

  handleCloseForm = () => {
    const homeState = this.state.homeState.set('showForm', false).set('jobmodal', undefined);
    this.setState({ homeState });
  };

  handleCloseDialog = () => {
    const homeState = this.state.homeState.set('showForm', false).set('jobmodal', undefined);
    this.setState({ homeState });
  }

  render() {
    return (
      <div>
        <Navig />
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
                <Input type="radio" name="radio1" value="Presencial" ref={(el) => { this.modalidad = el; }} onChange={this.handleChangeModalidad} />{' '}
                Presencial
              </Label>
              <Label check sm={{ offset: 2 }}>
                <Input type="radio" name="radio1" value="Remoto" ref={(el) => { this.modalidad = el; }} onChange={this.handleChangeModalidad} />{' '}
                Remoto
              </Label>
            </Col>
            <Col xs="6" sm="4">
              <h5>Ciudad</h5>
              <SelectMaps handleChangeCiudad={this.handleChangeCiudad} />
            </Col>
          </Row>
          <Row className="spc">
            <Col sm="8" md={{ size: 7 }}>
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
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
              </Input>
            </Col>
          </Row>
          <Row className="spc">
            <Col sm="12" md={{ size: 12 }}>
              <button
                onClick={this.clean}
                className="btn btn-md btn-danger btn-right"
              >
                Limpiar
              </button>
            </Col>
          </Row>
          <Row className="spc">
            <Col style={{ display: 'flex', flexWrap: 'wrap' }} >
              {this.state.homeState.get('job2')}
              <Modal
                active={this.state.homeState.get('showForm')}
                closeForm={this.handleCloseForm}
                job={this.state.homeState.get('jobmodal')}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Home;
