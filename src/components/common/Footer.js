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
      <a href="https://twitter.com/rahulyrao1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i className="fa fa-twitter-square" aria-hidden="true" title="View Rahul's Twitter"></i>
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/rahulyesantharao/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i className="fa fa-github" aria-hidden="true" title="View Rahul's GitHub"></i>
      </a>
      &nbsp;&nbsp;
      <a href="www.linkedin.com/in/rahulyesantharao" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fa fa-linkedin-square" aria-hidden="true" title="View Rahul's LinkedIn"></i>
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
