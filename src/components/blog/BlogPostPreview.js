import React from 'react';
import PropTypes from 'prop-types';

const BlogPostPreview = (props) => {
  return (
    <div>
      <h2><span>{props.title}</span></h2>
      <div dangerouslySetInnerHTML={{__html: props.content}}/>
    </div>
  );
}
BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default BlogPostPreview;
