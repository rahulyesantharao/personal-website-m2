import React from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
  backgroundSize: 'cover',
  backgroundPosition: '50% 100%',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  padding: '90px 0'
};

const PageTitle = (props) => {
  return(
    <section className="container-fluid" id={props.titleId} style={titleStyle}>
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
