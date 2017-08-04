import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';

const Main = (props) => (
  <main className={props.isHome?"home":""}>
    <Switch>
      <Route exact path="/" render={() => <HomePage setHome={props.setHome} unsetHome={props.unsetHome}/>}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/projects" component={ProjectsPage}/>
      {/* <Route component={404Page}/> - The 404 page, will match if nothing else did because no path => always match  */}
    </Switch>
  </main>
);

Main.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired
};

export default Main;
