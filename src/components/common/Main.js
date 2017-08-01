import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/projects" component={ProjectsPage}/>
      {/* <Route component={404Page}/> - The 404 page, will match if nothing else did because no path => always match  */}
    </Switch>
  </main>
);

export default Main;
