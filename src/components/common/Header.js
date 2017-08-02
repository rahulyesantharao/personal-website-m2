import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink exact to="/" activeClassName="active">Rahul Y</NavLink>
      { " | " }
      <NavLink exact to="/about" activeClassName="active">About</NavLink>
      { " | " }
      <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
    </nav>
  </header>
);

export default Header;
