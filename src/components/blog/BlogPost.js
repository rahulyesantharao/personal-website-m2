/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import BlogPostFooter from './BlogPostFooter';
import Prism from 'prismjs';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Going to Highlight Mount!"); // eslint-disable-line no-console
    Prism.highlightAll();
    console.log("Highlighted Mount!"); // eslint-disable-line no-console
  }
  componentDidUpdate() {
    console.log("Going to Highlight Update!"); // eslint-disable-line no-console
    Prism.highlightAll();
    console.log("Highlighted! Update"); // eslint-disable-line no-console
  }
  render() {
    console.log("RENDER BLOGPOST"); // eslint-disable-line no-console
    let curPost = this.props.post;
    if(!this.props.post.hasOwnProperty('post_id') || this.props.post.post_id.toString() !== this.props.postId) {
      this.props.getPost(this.props.postId);
      curPost = {
        post_title: "Loading...",
        post_html: "<p>Post Loading...</p>",
        author: {}
      }
    }
    let pageNum = 1;
    if(curPost.hasOwnProperty('pageNum')) pageNum = curPost.pageNum;
    document.title = curPost.post_title + " | Blog | Rahul Yesantharao";
    let postDate = curPost.post_date;
    if(curPost.hasOwnProperty('post_update')) postDate += (" | Updated: " + curPost.post_update);
    return (
      <div>
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h2 style={{marginTop:"0.6rem", fontSize:"4rem"}}><span>{curPost.post_title}</span></h2>
            <h3 style={{fontSize:"1rem", color:"#2b669b"}}>{postDate}</h3>
            <div dangerouslySetInnerHTML={{__html: curPost.post_html}} className="blog-post text"/>
          </div>
          {!curPost.hasOwnProperty("error") && <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
            <p className="top-pad-mobile"><b>{curPost.author.name}</b><br/>
            <span style={{fontSize:"1rem"}}>{curPost.author.description}<br/>
            <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{curPost.author.location}</span></p>

            <p className="is-right"><b>Share this post</b><br/>
            <span style={{fontSize:"1rem"}}>
            <a target="_blank" rel="noopener" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false"><i className="fa fa-twitter" aria-hidden="true"></i></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </span></p>
          </div>}
        </div>
        <BlogPostFooter page={pageNum}/>
      </div>
    );
  }
}
BlogPost.propTypes = {
  postId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default BlogPost;
