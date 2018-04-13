import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const BlogPostPreview = (props) => {
  // console.log("PReview:", props); // eslint-disable-line no-console
  return (
    <div className="column is-12-mobile is-8-tablet is-8-desktop blog-post-preview">
      <div style={{marginBottom:"0.75rem"}}>
        <Link to={`/blog/posts/${props.id}`}><h2><span>{props.title}</span></h2></Link>
      </div>
      <div style={{paddingBottom:"0.75rem"}}>
        <p dangerouslySetInnerHTML={{__html: props.content}} className="preview-p">
          {/* {props.content + "..."} */}
        </p>
      </div>
      <div style={{fontSize:"1rem", color:"#2b669b"}}>
        <p>
          {props.author} | {props.date}
        </p>
      </div>
    </div>
  );
}
BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default BlogPostPreview;
