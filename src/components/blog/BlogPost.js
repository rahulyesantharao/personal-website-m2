/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import BlogPostFooter from './BlogPostFooter';

const BlogPost = (props) => {
  const curPath = props.location.pathname.substr(12);
  let curPost = props.post;
  if(!props.post.hasOwnProperty('id') || props.post.id.toString() !== curPath) {
    props.getPost(curPath);
    curPost = {
      title: "Loading...",
      content: "<p>Post Loading...</p>"
    }
  }
  return (
    <div>
      <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <h2 style={{marginTop:"0.6rem", fontSize:"4rem"}}><span>{curPost.title}</span></h2>
          <h3 style={{fontSize:"1rem", color:"#2b669b"}}>{curPost.date}</h3>
          <div dangerouslySetInnerHTML={{__html: curPost.content}} className="blog-post text"/>
        </div>
        <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
          <p className="top-pad-mobile"><b>Rahul Yesantharao</b><br/>
          <span style={{fontSize:"1rem"}}>Student, Programmer, Artist.<br/>
          <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Cambridge, MA</span></p>

          <p className="is-right"><b>Share this post</b><br/>
          <span style={{fontSize:"1rem"}}>
          <a target="_blank" rel="noopener" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false"><i className="fa fa-twitter" aria-hidden="true"></i></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </span></p>
        </div>
      </div>
      <BlogPostFooter/>
    </div>
  );
}
BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default BlogPost;
