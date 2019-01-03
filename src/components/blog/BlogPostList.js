import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BlogPostPreview from './BlogPostPreview';

const BlogPostList = (props) => {
  console.log("RENDER BLOGPOSTLIST", props.page); // eslint-disable-line no-console
  return (
      <div className="columns is-centered">
        {props.page.map((el) =>{
          // console.log('Post!'); // eslint-disable-line no-console
          return (<BlogPostPreview title={el.post_title} content={el.post_html} date={el.post_date} id={el.post_id} key={el.post_id} author={el.author.name}/>);
        })}
        <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
          {props.hasNewer && <p><Link to={`/blog/pages/${props.pageNum-1}`}>&#8592; Newer Posts</Link></p>}
          {props.hasOlder && <p className="is-right"><Link to={`/blog/pages/${props.pageNum+1}`}>Older Posts &#8594;</Link></p>}
        </div>
      </div>
  )
}
BlogPostList.propTypes = {
  page: PropTypes.array.isRequired,
  pageNum: PropTypes.number.isRequired,
  hasNewer: PropTypes.bool.isRequired,
  hasOlder: PropTypes.bool.isRequired
}

export default BlogPostList;
