import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = (props) => {
  return(
    <section className="container-fluid" id={props.titleId}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>{props.titleText}</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

PageTitle.propTypes = {
  titleId: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired
};

export default PageTitle;
