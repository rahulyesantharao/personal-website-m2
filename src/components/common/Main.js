/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';
import PageAnimationWrapper from './PageAnimationWrapper';

const Main = (props) => {
  return(
  <main className={props.isHome?"home":""}>
        <Route exact path="/" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={true} page="Home">
            <HomePage setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
          </PageAnimationWrapper>
        )}/>
        <Route exact path="/about" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={false} page="About">
            <AboutPage {...rest}/>
          </PageAnimationWrapper>
        )}/>
        <Route exact path="/projects" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={false} page="Projects">
            <ProjectsPage {...rest}/>
          </PageAnimationWrapper>
        )}/>
  </main>
)};

Main.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired
};

export default Main;
