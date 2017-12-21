import React from 'react';
import PropTypes from 'prop-types';


const Message = ({ text }) =>
  (text === '') ? (
    <div>
      {text}
    </div>
  ) :
  (
    <div className="message-popup">
      {text}
    </div>
  );

Message.propTypes = {
  text: PropTypes.string,
};

Message.defaultProps = {
  text: '',
};

export default Message;
