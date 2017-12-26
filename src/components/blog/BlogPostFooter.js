import React from 'react';
import {Link} from 'react-router-dom';

const BlogPostFooter = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-12-mobile is-8-tablet is-8-desktop is-flex text">
        <p><Link to="/blog">&#8592; Back To Blog</Link></p>
      </div>
    </div>
  )
};
export default BlogPostFooter;
