import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';
// import PageWrapper from './PageWrapper';
import PageWrapper2 from './PageWrapper2';
// const HomePageWrapped = PageWrapper(HomePage);
// const AboutPageWrapped = PageWrapper(AboutPage);
// const ProjectsPageWrapped = PageWrapper(ProjectsPage);

const HomePageWrapped2 = PageWrapper2(HomePage);
const AboutPageWrapped2 = PageWrapper2(AboutPage);
const ProjectsPageWrapped2 = PageWrapper2(ProjectsPage);

const Main = (props) => (
  <main className={props.isHome?"home":""}>
      <Switch>
        <Route exact path="/" children={({ matched, ...rest }) => (
          <HomePageWrapped2 mounted={matched} setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
        )}/>
        <Route exact path="/about" children={({ matched, ...rest }) => (
          <AboutPageWrapped2 mounted={matched} setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
        )}/>
        <Route exact path="/projects" children={({ matched, ...rest }) => (
          <ProjectsPageWrapped2 mounted={matched} setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
        )}/>
        {/* <Route exact path="/" render={() => <HomePageWrapped setHome={props.setHome} unsetHome={props.unsetHome}/>}/> */}
        {/* <Route exact path="/about" component={AboutPageWrapped}/> */}
        {/* <Route exact path="/projects" component={ProjectsPageWrapped}/> */}
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
