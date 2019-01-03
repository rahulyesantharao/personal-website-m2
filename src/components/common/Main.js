/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ListsPage from '../lists/ListsPage';
import ProjectsPage from '../projects/ProjectsPage';
import BlogPage from '../blog/BlogPage';
import PropTypes from 'prop-types';
import PageAnimationWrapper from './PageAnimationWrapper';
import NotFoundPage from './NotFoundPage.js';

const Main = (props) => {
  let found = false;
  return (
    <main className={props.isHome?"home":""}>
      <Route exact path="/" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={true}>
          <HomePage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/about" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "About | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <AboutPage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/coursework" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Coursework | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ListsPage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route path="/projects" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Projects | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <ProjectsPage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route path="/blog" children={({ match, ...rest }) => {
        if(match) {
          found = true;
          document.title = "Blog | Rahul Yesantharao";
        }
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false}>
          <BlogPage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route children={({ ...rest }) => {
        if(!found) document.title = "Error 404 | Rahul Yesantharao";
        return (
        <PageAnimationWrapper mounted={!found} home={false}>
          <NotFoundPage page="regular" {...rest}/>
        </PageAnimationWrapper>
      );}}/>
    </main>
  );
}

Main.propTypes = {
  isHome: PropTypes.bool.isRequired
};

export default Main;
