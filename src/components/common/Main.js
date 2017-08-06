import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';
// import PageWrapper from './PageWrapper';
import PageWrapper2 from './PageWrapper2';
// const HomePageWrapped = PageWrapper(HomePage);
// const AboutPageWrapped = PageWrapper(AboutPage);
// const ProjectsPageWrapped = PageWrapper(ProjectsPage);

// const HomePageWrapped2 = PageWrapper2(HomePage);
// const AboutPageWrapped2 = PageWrapper2(AboutPage);
// const ProjectsPageWrapped2 = PageWrapper2(ProjectsPage);

const Main = (props) => { //console.log("******************");
  return(
  <main className={props.isHome?"home":""}>
      {/* <Switch> */}
        <Route exact path="/" children={({ match, ...rest }) => (
          <PageWrapper2 mounted={match} home={true} page="Home">
            <HomePage setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
          </PageWrapper2>
        )}/>
        <Route exact path="/about" children={({ match, ...rest }) => (
          <PageWrapper2 mounted={match} home={false} page="About">
            <AboutPage {...rest}/>
          </PageWrapper2>
        )}/>
        <Route exact path="/projects" children={({ match, ...rest }) => (
          <PageWrapper2 mounted={match} home={false} page="Projects">
            <ProjectsPage {...rest}/>
          </PageWrapper2>
        )}/>
        {/* <Route exact path="/" render={() => <HomePageWrapped setHome={props.setHome} unsetHome={props.unsetHome}/>}/> */}
        {/* <Route exact path="/about" component={AboutPageWrapped}/> */}
        {/* <Route exact path="/projects" component={ProjectsPageWrapped}/> */}
        {/* <Route component={404Page}/> - The 404 page, will match if nothing else did because no path => always match  */}
      {/* </Switch> */}
  </main>
)};

Main.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired
};

export default Main;
