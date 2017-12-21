import React from 'react';
import PropTypes from 'prop-types';


const Warning = ({ text }) =>
  (text === '') ? (
    <div>
      {text}
    </div>
  ) :
  (
    <div className="message-popup-warning">
      {text}
    </div>
  );

Warning.propTypes = {
  text: PropTypes.string,
};

Warning.defaultProps = {
  text: '',
};

export default Warning;
