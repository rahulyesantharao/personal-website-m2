import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
  <footer className={props.isHome?"home":""}>
        <p>
          &#169; 2017 Rahul Yesantharao
        </p>
  </footer>
);

Footer.propTypes = {
  isHome: PropTypes.bool.isRequired
}

export default Footer;
