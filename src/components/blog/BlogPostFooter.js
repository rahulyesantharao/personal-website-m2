import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BlogPostFooter = (props) => {
  return (
    <div className="columns is-centered">
      <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
        <p><Link to={`/blog/pages/${props.page}`}>&#8592; Back To Blog</Link></p>
      </div>
    </div>
  )
};
BlogPostFooter.propTypes = {
  page: PropTypes.number.isRequired
};
export default BlogPostFooter;
