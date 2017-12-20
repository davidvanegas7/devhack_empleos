import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import Dialog from 'react-toolbox/lib/dialog';

class ModalForm extends Component {

  static propTypes = {
    job: ImmutablePropTypes.map.isRequired,
    active: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
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
  });

  state = {
    modalState: ModalForm.modalState(),
  };

  componentWillReceiveProps(nextProps) {
    const { job } = nextProps;
    this.setState({ modalState: job || ModalForm.modalState() });
    // this.setState({ postState: nextProps.post || PostForm.postState() }),
  }

  handleClose = () => {
    const { closeForm } = this.props;
    this.setState({ modalState: ModalForm.modalState() });
    closeForm();
  };

  render() {
    const { active } = this.props;
    const actions = [
      { label: 'Cancel', onClick: this.handleClose },
    ];
    return (
      <div>
        <Dialog
          actions={actions}
          active={active}
          onEscKeyDown={this.handleClose}
          onOverlayClick={this.handleClose}
          title="Job"
        >
          <h5> {this.state.modalState.get('titulo')} </h5>
          <h5> {this.state.modalState.get('empresa')} </h5>
          <h5> {this.state.modalState.get('email')} </h5>
          <h5> {this.state.modalState.get('telefono')} </h5>
          <h5> {this.state.modalState.get('descripcion')} </h5>
          <h5> {this.state.modalState.get('modalidad')} </h5>
          <h5> {this.state.modalState.get('keywords')} </h5>
          <h5> {this.state.modalState.get('ciudad')} </h5>
          <h5> {this.state.modalState.get('fecha')} </h5>
        </Dialog>

      </div>
    );
  }
}

export default ModalForm;
