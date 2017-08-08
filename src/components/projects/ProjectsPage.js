/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import PageAnimationWrapper from '../common/PageAnimationWrapper';
import ProjectsDisplay from './ProjectsDisplay'
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const ProjectsPage = () => {
  return (
    <section className="container">
      <div className="columns is-centered">
        <h1 className="column is-12-mobile is-8-tablet is-6-desktop"><span>Projects</span></h1>
      </div>
      <Route exact path="/projects" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Projects">
          <ProjectsDisplay {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/project1" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Project1 | Projects">
          <Project1 {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/project2" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Project2 | Projects">
          <Project2 {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/project3" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={true} page="Project3 | Projects">
          <Project3 {...rest}/>
        </PageAnimationWrapper>
      )}/>
    </section>
  )
}

export default ProjectsPage;
