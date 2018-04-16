/* eslint-disable react/no-children-prop */
/* eslint-disable no-console */
import React from 'react';
import {Route, } from 'react-router-dom';
import PageAnimationWrapper from '../common/PageAnimationWrapper';
import PageTitle from '../common/PageTitle';
import NotFoundPage from "../common/NotFoundPage";
import BlogPost from './BlogPost';
import BlogPostList from './BlogPostList';

const PAGE_URL = 'https://api.rahulyesantharao.com/blog-api/pages'
const POST_URL = 'https://api.rahulyesantharao.com/blog-api/posts'

const POST_404 = {post_title: "Error 404", post_html:"<p>Sorry! That post does not seem to exist.</p>", author:{}, post_id:"ENTER"}

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 0,
      posts: {},
      pages: []
    };
  }
  aggregatePage(pageNum, pageArr) {
    let loaded = true;
    for (let postNum in this.state.pages[pageNum-1]) {
      let post = this.state.pages[pageNum-1][postNum];
      let next = this.state.posts[post];
      if(!next.hasOwnProperty('post_id')) {
        next = {post_title: "Loading...", post_id: post, author: {}}
        loaded = false;
      }
      pageArr.push(next);
    }
    return loaded;
  }
  getPost(postId) {
    const url = POST_URL + `/${postId}`;
    console.log(`getPost(${postId}): ${url}`);
    return fetch(url)
    .then(response => {
      console.log("Step 1");
      return response.json();
    })
    .then(data => {
      console.log("Step 2");
      this.setState(prevState => {
        let newPost = Object.assign({}, prevState.posts[postId], data);
        let newPosts = Object.assign({}, prevState.posts, {[postId]: newPost});
        return Object.assign({}, prevState, {posts: newPosts});
      }, () => console.log(`Post ${postId} Fetched!`, this.state));
    })
    .catch(ex => {
      console.log(`Error fetching ${postId}`, ex); // eslint-disable-line no-console
    });
  }
  getPage(pageNum) {
    const url = PAGE_URL + `/${pageNum}`;
    return fetch(url)
    .then(response => {
      // console.log(response);
      // console.log(response.json());
      return response.json();
    })
    .then(data => {
      this.setState(prevState => {
        // compile the posts
        let postsToAdd = {};
        for (let postNum in data) {
          let postid = data[postNum].post_id;
          let post = Object.assign({}, prevState.posts[postid], data[postNum]);
          postsToAdd[postid] = post;
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
        Object.assign(newPosts, this.state.posts); // keep anything we loaded before
        for(const page in data.pages) {
          console.log(page);
          for(const post in data.pages[page]) {
            console.log(data.pages[page][post]);
            if(!newPosts.hasOwnProperty(data.pages[page][post])) newPosts[data.pages[page][post]] = {pageNum: (parseInt(page)+1)}
            else newPosts[data.pages[page][post]].pageNum = (parseInt(page)+1);
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
    console.log("BlogPage Mounted!");
  }

  render() {
    console.log("RENDER BLOGPAGE");
    let found = false;
    let unmounted = <PageAnimationWrapper mounted={false} home={false}/>;
    return(
      <div>
        <PageTitle titleId="projectsHeader" titleText="/usr/etc/rahul/*"/>
        <section className="container top-pad">
          {/* ROUTE to page 1 */}
          {/* <Redirect exact to="/blog/pages/1" from="/blog"/> */}
          <Route exact path="/blog" children={({match, ...rest}) => {
            if(!match) return unmounted;

            // match found!
            console.log("/blog | matched!");
            let pageNum = 1;
            document.title = "Blog | Rahul Yesantharao";
            found = true;
            // If BlogManager has loaded, find the page
            let pageArr = [];
            let loaded = true;
            if(this.state.numPages>0) {
              loaded = this.aggregatePage(pageNum, pageArr);
              console.log("/blog | Page data: ", pageArr);
            }
            if(!loaded) {
              console.log("/blog | Fetching the page!");
              this.getPage(pageNum); // page isn't fully loaded
            }
            return (
              <PageAnimationWrapper mounted={true} home={false}>
                <BlogPostList {...rest}
                  page={pageArr}
                  pageNum={pageNum}
                  hasOlder={pageNum<this.state.numPages}
                  hasNewer={pageNum>1}/>
              </PageAnimationWrapper>
            );
          }}/>

          {/* ROUTE to page by number */}
          <Route exact path="/blog/pages/:num" children={({ match, ...rest }) => { // go to a page
            if(!match) return unmounted;

            // Page matched!
            document.title = "Blog | Rahul Yesantharao";
            found = true;
            let pageNum = Number.parseInt(match.params.num);

            console.log(`/blog/pages | Page Matched: ${pageNum}`);
            console.log("/blog/pages | Page:", pageNum, "; numPages:", this.state.numPages);

            // If BlogManager has loaded, find the page
            let pageArr = [];
            let loaded = true;
            if(this.state.numPages>0) {
              if(!Number.isInteger(pageNum) || (pageNum<1) || (pageNum>this.state.numPages)) {
                console.log("/blog/pages | PROBLEM: pageNum:", pageNum, "; numPages:", this.state.numPages, " | ", Number.isInteger(pageNum));
                found = false;
                return unmounted;
              }
              else {
                loaded = this.aggregatePage(pageNum, pageArr);
                console.log("/blog/pages | Page data", pageArr);
              }
            }
            if(!loaded) {
              console.log("/blog/pages | Fetching the page!");
              this.getPage(pageNum); // page isn't fully loaded
            }

            return (
            <PageAnimationWrapper mounted={true} home={false}>
              <BlogPostList {...rest}
                page={pageArr}
                pageNum={pageNum}
                hasOlder={pageNum<this.state.numPages}
                hasNewer={pageNum>1}/>
            </PageAnimationWrapper>
          );}}/>

          {/* ROUTE to post by id */}
          <Route exact path="/blog/posts/:id" children={({ match, ...rest }) => { // go to a post
            if(!match) return unmounted;

            document.title = "Blog | Rahul Yesantharao";
            found = true;
            let pageId = match.params.id;

            // If the BlogManager has loaded, then find the post
            let postObj = {};
            if(this.state.numPages>0) {
              if(this.state.posts.hasOwnProperty(pageId)) postObj = this.state.posts[pageId];
              else postObj = Object.assign({},POST_404,{post_id:pageId}, {error:true});
            }

            return (
            <PageAnimationWrapper mounted={true} home={false}>
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
