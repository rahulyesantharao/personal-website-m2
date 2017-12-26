import React from 'react';
import PropTypes from 'prop-types';
import BlogPostPreview from './BlogPostPreview';

const BlogPostList = (props) => {
  // console.log("Posts!", props.posts); // eslint-disable-line no-console
  const handleOlder = (e) => {
    e.preventDefault();
    props.getOlder();
  }
  const handleNewer = (e) => {
    e.preventDefault();
    props.getNewer();
  }
  return (
      <div className="columns is-centered">
        {props.posts.map((el) =>{
          // console.log('Post!'); // eslint-disable-line no-console
          return (<BlogPostPreview title={el.title} content={el.content} date={el.date} id={el.id} key={el.id}/>);
        })}
        <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
          {props.hasNewer && <p><a href="#" onClick={handleNewer}>&#8592; Newer Posts</a></p>}
          {props.hasOlder && <p className="is-right"><a href="#" onClick={handleOlder}>Older Posts &#8594;</a></p>}
        </div>
      </div>
  )
}
BlogPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  hasNewer: PropTypes.bool.isRequired,
  hasOlder: PropTypes.bool.isRequired,
  getNewer: PropTypes.func.isRequired,
  getOlder: PropTypes.func.isRequired
}

export default BlogPostList;
