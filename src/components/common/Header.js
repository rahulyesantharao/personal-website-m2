import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header>
    <nav className={props.isHome?"navbar home":"navbar"}>
      <div className="navbar-brand">
        <div className="navbar-item" id="logo">
          <NavLink exact to="/" activeClassName="active">Rahul Y</NavLink>
        </div>
        <div className="navbar-item is-hidden-desktop">
          <a href="https://github.com/rahulyesantharao/" target="_blank" rel="noopener noreferrer">GH</a>
        </div>
        <div className={props.menuOpen?"navbar-burger is-active":"navbar-burger"} onClick={props.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={props.menuOpen?"navbar-menu is-active":"navbar-menu"}>
        <div className="navbar-start">
          <div className="navbar-item">
            <NavLink exact to="/about" activeClassName="active">ABOUT</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink exact to="/projects" activeClassName="active">PROJECTS</NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item is-hidden-touch">
            <a href="https://github.com/rahulyesantharao/" target="_blank" rel="noopener noreferrer">GH</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default Header;
