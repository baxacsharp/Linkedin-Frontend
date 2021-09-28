import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import CreatePost from 'components/news-feed-comp/CreatePost';
import PostList from 'components/news-feed-comp/PostList';
import Side from 'components/home/side-col/Side';

export default class NewsFeed extends Component {
  state = {
    isLoading: true,
    posts: [],
    userLogged: null,
  };
  getUser = async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/profile/1`
    );
    const userLogged = await resp.json();
    this.setState({ userLogged });
    console.log('user logged: ', userLogged);
  };

  getPosts = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      const posts = await resp.json();
      console.log(posts + 'fetched')
      this.setState({ posts });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.getUser();
    this.getPosts();
    console.log("hi 1", this.state.posts)
  };

  componentDidUpdate = () => {

    console.log("posts : ", this.state.posts);
  };

  render() {
    // console.log(
    //   this.state.posts.filter(
    //     (post) => post.user && post.user.name.toLowerCase() === 'slavko'
    //   )
    // );
    // console.log(this.state.userLogged);
    return (
      <>
        <Container>
          {this.props.children}
          <Row>
            <Col md={8} className='mt-3'>
              <CreatePost
                userLogged={this.state.userLogged}
                getPosts={this.getPosts}
                pro
              />
              {this.state.posts && this.state.posts.length > 0 && (
                <PostList
                  posts={this.state.posts}
                  userLogged={this.state.userLogged}
                  getPosts={this.getPosts}
                  isLoading={this.state.isLoading}
                />
              )}
            </Col>
            <Side user={this.state.userLogged} />
          </Row>
        </Container>
      </>
    );
  }
}
