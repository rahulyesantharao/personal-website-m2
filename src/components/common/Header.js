import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const homeStyle = {
  position: 'fixed',
  right: '0',
  left: '0',
  top: '0'
}

const Header = (props) => (
  <header>
    <nav className="navbar" style={props.isHome?homeStyle:{}}>
      <div className={props.menuOpen?"navbar-menu-drawer is-active":"navbar-menu-drawer"}>
          <div className="navbar-item">
            <NavLink exact to="/about" activeClassName="active" onClick={props.toggleMenu}>ABOUT</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink exact to="/projects" activeClassName="active" onClick={props.toggleMenu}>PROJECTS</NavLink>
          </div>
      </div>
      <div className="navbar-left">
        <div className="navbar-item is-hidden-desktop">
        <div className={props.menuOpen?"navbar-burger is-active":"navbar-burger"} onClick={props.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
        <div className="navbar-item" id="logo">
          <NavLink exact to="/" activeClassName="active"><span>Rahul Y</span></NavLink>
        </div>
      </div>
      <div className="navbar-menu-desktop">
          <div className="navbar-item">
            <NavLink exact to="/about" activeClassName="active">ABOUT</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink exact to="/projects" activeClassName="active">PROJECTS</NavLink>
          </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-item">
          <a href="https://github.com/rahulyesantharao/" target="_blank" rel="noopener noreferrer">
            {/* <img src={require('../../svg/github.svg')}/> */}
            GH
          </a>
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
