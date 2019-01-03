import React from 'react';
import PropTypes from 'prop-types';
import ProjectFooter from '../projects/ProjectFooter';
import BlogPostFooter from '../blog/BlogPostFooter';
const NotFoundPage = (props) => {
  let curURL = window.location.pathname;
  if(props.page==='projects') {
    return (
      <div>
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h2><span>Error 404</span></h2>
          </div>
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <p>Sorry! That project does not seem to exist.</p>
          </div>
        </div>
        <ProjectFooter type="none" link=""/>
      </div>
    )
  }
  if(props.page==='blog') {
    return (
      <div>
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h2><span>Error 404</span></h2>
          </div>
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <p>Sorry! That page does not seem to exist.</p>
          </div>
        </div>
        <BlogPostFooter page={1}/>
      </div>
    )
  }
  return (
    <div>
    <section className="container-fluid">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>Error 404</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section className="container top-pad">
      <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <div className="text">
              <p style={{paddingTop:'0'}}>
                {"The requested url " + curURL + " could not be found."}
              </p>
            </div>
          </div>
      </div>
    </section>
    </div>
  )
}

NotFoundPage.propTypes = {
  page: PropTypes.string.isRequired
}

export default NotFoundPage;
