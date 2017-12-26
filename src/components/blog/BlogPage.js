/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route} from 'react-router-dom';
import PageAnimationWrapper from '../common/PageAnimationWrapper';
import BlogPostList from './BlogPostList';
import BlogPost from './BlogPost';
import NotFoundPage from "../common/NotFoundPage";
class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 1,
      hasOlder: false,
      hasNewer: false,
      posts: [],
      post: {}
    }
  }

  getPost(postNum) {
    const url = `/blog-posts/post-${postNum}.json`;
    return fetch(url)
      .then(response => {
        // console.log("Fetched", response); // eslint-disable-line no-console
        return response.json();
      }).catch(ex => { // eslint-disable-line no-unused-vars
        // console.log('fetch post exception :(', ex) // eslint-disable-line no-console
        return {post: {title: "Error 404", content:"<p>Sorry! That post does not seem to exist.</p>", id:postNum}}
      });
  }
  setPost(postNum) {
    this.getPost(postNum).then(data => {
      this.setState(prevState => (
        Object.assign({}, prevState, data)
      ))
    });
  }
  getPage(page) {
    const url = `/blog-posts/preview-${page}.json`;
    return fetch(url)
      .then(response => {
        // console.log("Fetched", response); // eslint-disable-line no-console
        return response.json();
      }).catch(ex => { // eslint-disable-line no-unused-vars
        // console.log('fetch exception :(', ex) // eslint-disable-line no-console
      });
  }
  getCurPage() {
    this.getPage(this.state.curPage).then(data => {
      // console.log("Got CurPage!", data); // eslint-disable-line no-console
      this.setState(prevState => (
        Object.assign({}, prevState, {hasOlder:data.hasOlder, hasNewer:data.hasNewer, posts:data.posts.reverse()})
      ))
    });
  }

  getNewer() {
    this.setState(prevState => (
      Object.assign({}, prevState, {curPage:prevState.curPage+1})
    ), this.getCurPage);
  }
  getOlder() {
    this.setState(prevState => (
      Object.assign({}, prevState, {curPage:prevState.curPage-1})
    ), this.getCurPage);
  }

  componentDidMount() {
    // console.log("Blog Mounted!"); // eslint-disable-line no-console
    this.getCurPage();
  }

  render() {
    // console.log(this.props.status);
    let found = false;
    return (
      <div>
        <section className="container-fluid" id="projectsHeader">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-12-mobile is-8-tablet is-8-desktop">
                <h1><span>/usr/etc/*</span></h1>
              </div>
            </div>
          </div>
        </section>
        <section className="container top-pad">
        <Route exact path="/blog" children={({ match, ...rest }) => {
          if(match) {
            document.title = "Blog | Rahul Yesantharao";
            found = true;
          }
          console.log("New State!", this.state); // eslint-disable-line no-console
          return (
          <PageAnimationWrapper mounted={match?true:false} home={false}>
            <BlogPostList {...rest} posts={this.state.posts} getNewer={this.getNewer.bind(this)} getOlder={this.getOlder.bind(this)} hasNewer={this.state.hasNewer} hasOlder={this.state.hasOlder}/>
          </PageAnimationWrapper>
        );}}/>
        <Route exact path="/blog/posts/:id" children={({ match, ...rest }) => {
          if(match) {
            document.title = "Blog | Rahul Yesantharao";
            found = true;
          }
          return (
          <PageAnimationWrapper mounted={match?true:false} home={false}>
            <BlogPost {...rest} post={this.state.post} getPost={this.setPost.bind(this)}/>
          </PageAnimationWrapper>
        );}}/>
        <Route children={({ ...rest }) => {
          if(!found) document.title = "Error 404 | Rahul Yesantharao";
          return (
          <PageAnimationWrapper mounted={!found} home={false}>
            <NotFoundPage page="blog" {...rest}/>
          </PageAnimationWrapper>
        );}}/>
        </section>
      </div>
    );
  }
}

export default BlogPage;
