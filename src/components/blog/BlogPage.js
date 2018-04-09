/* eslint-disable react/no-children-prop */
/* eslint-disable no-console */
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PageAnimationWrapper from '../common/PageAnimationWrapper';
import PageTitle from '../common/PageTitle';
import NotFoundPage from "../common/NotFoundPage";
import BlogPost from './BlogPost';
import BlogPostList from './BlogPostList';

const PAGE_URL = '/blog-posts/pages.json';//'https://api.rahulyesantharao.com/blog-api/pages'
const POST_URL = '/blog-posts';//'https://api.rahulyesantharao.com/blog-api/posts'

const POST_404 = {post_title: "Error 404", post_html:"<p>Sorry! That post does not seem to exist.</p>", post_id:"ENTER"}

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 0,
      posts: {},
      pages: []
    };
  }

  getPost(postId) {
    const url = POST_URL + `/${postId}.json`;
    return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState(prevState => {
        let newPosts = Object.assign({}, prevState.posts, {postId: data});
        return Object.assign({}, prevState, {posts: newPosts});
      }, () => console.log(`Post ${postId} Fetched!`, this.state));
    })
    .catch(ex => {
      console.log(`Error fetching ${postId}!`, ex); // eslint-disable-line no-console
    });
  }
  getPage(pageNum) {
    const url = `/blog-posts/page-${pageNum}.json`;
    return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState(prevState => {
        // compile the posts
        let postsToAdd = {};
        for (let postNum in data) {
          let post = data[postNum];
          postsToAdd[post.post_id] = post;
        }
        let newPosts = Object.assign({}, prevState.posts, postsToAdd);
        return Object.assign({}, prevState, {posts: newPosts});
      }, () => console.log(`Page ${pageNum} Fetched!`, this.state));
    })
    .catch(ex => {
      console.log(`Error fetching page ${pageNum}!`, ex); // eslint-disable-line no-console
    });
  }
  setup() {
    // Posts + Pages Initial Setup
    return fetch(PAGE_URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // build post object
        console.log("Initial Data", data);
        let newPosts = {};
        for(const page in data.pages) {
          console.log(page);
          for(const post in data.pages[page]) {
            console.log(data.pages[page][post]);
            newPosts[data.pages[page][post]] = {}
          }
        }
        console.log("Initial Posts", newPosts);

        // set new state with fetched data
        this.setState(prevState => (
          Object.assign({}, prevState, {numPages:data.num_pages, posts: newPosts, pages:data.pages})
        ), () => console.log("Initial Setup Done!", this.state));
      })
      .catch(ex => {
        console.log('fetch initial setup exception :(', ex) // eslint-disable-line no-console
      });
  }
  componentDidMount() {
    this.setup();
    console.log("Component Mounted!");
  }

  render() {
    console.log("RENDER CALLED");
    let found = false;
    return(
      <div>
        <PageTitle titleId="projectsHeader" titleText="/usr/etc/rahul/*"/>
        <section className="container top-pad">
          {/* REDIRECT to page 1 */}
          <Redirect exact from="/blog" to="/blog/pages/1"/>

          {/* ROUTE to page by number */}
          <Route exact path="/blog/pages/:num" children={({ match, ...rest }) => { // go to a page
            let pageNum = 1;
            if(match) {
              document.title = "Blog | Rahul Yesantharao";
              found = true;
              pageNum = Number.parseInt(match.params.num);
            }

            console.log("Page:", pageNum, "; numPages:", this.state.numPages);

            // If BlogManager has loaded, find the page
            let pageArr = [];
            let loaded = true;
            if(this.state.numPages>0) {
              if(!Number.isInteger(pageNum) || (pageNum<1) || (pageNum>this.state.numPages)) {
                console.log("PROBLEM: pageNum:", pageNum, "; numPages:", this.state.numPages, " | ", Number.isInteger(pageNum));
                found = false;
              }
              else {
                for (let postNum in this.state.pages[pageNum-1]) {
                  let post = this.state.pages[pageNum-1][postNum];
                  let next = this.state.posts[post];
                  if(Object.keys(next).length === 0) {
                    next = {post_title: "Loading...", post_id: post}
                    loaded = false;
                  }
                  pageArr.push(next);
                }
                console.log("ALL GOOD", pageArr);
              }
            }
            if(!loaded) {
              console.log("Fetching the page!");
              this.getPage(pageNum); // page isn't fully loaded
            }

            return (
            <PageAnimationWrapper mounted={found?true:false} home={false}>
              <BlogPostList {...rest}
                page={pageArr}
                pageNum={pageNum}
                hasOlder={pageNum<this.state.numPages}
                hasNewer={pageNum>1}/>
            </PageAnimationWrapper>
          );}}/>

          {/* ROUTE to post by id */}
          <Route exact path="/blog/posts/:id" children={({ match, ...rest }) => { // go to a post
            let pageId = 'no-post';
            if(match) {
              document.title = "Blog | Rahul Yesantharao";
              found = true;
              pageId = match.params.id;
            }

            // If the BlogManager has loaded, then find the post
            let postObj = {};
            if(this.state.numPages>0) {
              if(this.state.posts.hasOwnProperty(pageId)) postObj = this.state.posts[pageId];
              else postObj = Object.assign({},POST_404,{post_id:pageId});
            }

            return (
            <PageAnimationWrapper mounted={match?true:false} home={false}>
              <BlogPost {...rest} postId={pageId} post={postObj} getPost={this.getPost.bind(this)}/>
            </PageAnimationWrapper>
          );}}/>

          {/* ERROR Blog 404 */}
          <Route children={({ ...rest }) => { // blog 404 page
            if(!found) document.title = "Error 404 | Blog | Rahul Yesantharao";
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
