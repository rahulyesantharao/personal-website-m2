import React from 'react';
import PropTypes from 'prop-types';

const homeStyle = {
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    right: '0px',
    color: 'white'
};

const Footer = (props) => (
  <footer style={props.isHome?homeStyle:{}}>
        <p>
          &#169; 2017 Rahul Yesantharao
        </p>
  </footer>
);

Footer.propTypes = {
  isHome: PropTypes.bool.isRequired
}

export default Footer;
