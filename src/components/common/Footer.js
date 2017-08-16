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
      <a href="https://github.com/rahulyesantharao/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      &nbsp;&nbsp;
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
    </p>
    <p>
      <i className="fa fa-pencil" aria-hidden="true"></i> with <i className="fa fa-code" aria-hidden="true"></i> by Rahul Yesantharao
    </p>
  </footer>
);

Footer.propTypes = {
  isHome: PropTypes.bool.isRequired
}

export default Footer;
