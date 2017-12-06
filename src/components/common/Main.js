/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';
import PageAnimationWrapper from './PageAnimationWrapper';
import NotFoundPage from './NotFoundPage.js';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.found = false;
  }
  render() {
    this.found = false;
    return(
      <main className={this.props.isHome?"home":""}>
        <Route exact path="/" children={({ match, ...rest }) => {
          this.found = this.found || match;
          return (
          <PageAnimationWrapper mounted={match} home={true} page="Home">
            <HomePage setHome={this.props.setHome} unsetHome={this.props.unsetHome} {...rest}/>
          </PageAnimationWrapper>
        );}}/>
        <Route exact path="/about" children={({ match, ...rest }) => {
          this.found = this.found || match;
          return (
          <PageAnimationWrapper mounted={match} home={false} page="About">
            <AboutPage {...rest}/>
          </PageAnimationWrapper>
        );}}/>
        <Route path="/projects" children={({ match, ...rest }) => {
          this.found = this.found || match;
          return (
          <PageAnimationWrapper mounted={match} home={false} page="Projects">
            <ProjectsPage {...rest}/>
          </PageAnimationWrapper>
        );}}/>
        <Route children={({ ...rest }) => (
          <PageAnimationWrapper mounted={!this.found} home={false} page="Error 404 (Not Found!)">
            <NotFoundPage {...rest}/>
          </PageAnimationWrapper>
        )}/>
      </main>
    );
  }
}

Main.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired
};

export default Main;
