import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { isNil } from 'lodash/fp';
import Dialog from 'react-toolbox/lib/dialog';

class ModalForm extends Component {

  static propTypes = {
    job: ImmutablePropTypes.map.isRequired,
    active: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  };

  static modalState = () => fromJS({
    titulo: '',
    empresa: '',
    email: '',
    telefono: '',
    descripcion: '',
    modalidad: '',
    keywords: '0',
    ciudad: '',
    fecha: '',
    clicked: false,
    alert: '',
  });

  state = {
    modalState: ModalForm.modalState(),
  };

  componentWillReceiveProps(nextProps) {
    const { job } = nextProps;
    this.setState({ modalState: job || ModalForm.modalState() });
    // this.setState({ postState: nextProps.post || PostForm.postState() }),
  }

  unLogged = () => {
    const status = this.props.userData.get('userStatus');
    console.log('status');
    console.log(status);
    return isNil(status);
  }

  handleClose = () => {
    const { closeForm } = this.props;
    this.setState({ modalState: ModalForm.modalState() });
    closeForm();
  };

  showInfo = () => {
    const state = this.state.modalState.set('clicked', true);
    const modalState = state.set('alert', this.unLogged() ? 'Debes estar registrado para poder ver la información de contacto' : '');
    this.setState({ modalState });
  }

  render() {
    const { active } = this.props;
    const actions = [
      { label: 'Salir', onClick: this.handleClose },
    ];
    const information = (!this.unLogged() && this.state.modalState.get('clicked')) ? (
      <tr>
        <th><h6 style={{ color: 'black' }}>Email:</h6></th>
        <td>
          {this.state.modalState.get('email')}
        </td>
        <th><h6 style={{ color: 'black' }}>Telefono:</h6></th>
        <td>
          {this.state.modalState.get('telefono')}
        </td>
      </tr>) : (<tr>
        <th><h6 style={{ color: 'black' }}>Email:</h6></th>
        <td>
          ********@************
        </td>
        <th><h6 style={{ color: 'black' }}>Telefono:</h6></th>
        <td>
          **********
        </td>
      </tr>);

    return (
      <div>
        <Dialog
          actions={actions}
          active={active}
          onEscKeyDown={this.handleClose}
          onOverlayClick={this.handleClose}
          title={this.state.modalState.get('titulo')}
        >
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th><h6 style={{ color: 'black' }}>Empresa:</h6></th>
                <td>
                  {this.state.modalState.get('empresa')}
                </td>
                <th><h6 style={{ color: 'black' }}>Ciudad:</h6></th>
                <td>
                  {this.state.modalState.get('ciudad')}
                </td>
              </tr>
              <tr>
                <th><h6 style={{ color: 'black' }}>Modalidad:</h6></th>
                <td>
                  {this.state.modalState.get('modalidad')}
                </td>
                <th><h6 style={{ color: 'black' }}>Fecha de creacion:</h6></th>
                <td>
                  {this.state.modalState.get('fecha')}
                </td>
              </tr>
              <tr>
                <th><h6 style={{ color: 'black' }}>Tecnologias:</h6></th>
                <td>
                  {this.state.modalState.get('keywords')}
                </td>
              </tr>
              <tr>
                <th><h6 style={{ color: 'black' }}>Descripcion:</h6></th>
                <td colSpan="3">
                  {this.state.modalState.get('descripcion')}
                </td>
              </tr>
              {information}
              <tr>
                <th colSpan="4" style={{ color: 'red' }}>
                  {this.state.modalState.get('alert')}
                </th>
              </tr>
              <tr>
                <th colSpan="4">
                  <button className="btn btn-danger" onClick={this.showInfo}>Ver información</button>
                </th>
              </tr>
            </tbody>
          </table>
        </Dialog>

      </div>
    );
  }
}

export default ModalForm;
