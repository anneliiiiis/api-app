import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import NewPost from '../components/NewPost';

class Posts extends Component {

  componentDidMount() {
    this.props.onGetPosts();
  }

  render() {
    const { posts, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <NewPost/>
        </Row>
        <h1>Posts</h1>
        <Row>
          <Col lg={12}>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              (posts && _.map(posts, (post, id) => {
                return (
                  <Post showButton={true} key={ post.id } {...post} />
                )
              })) }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.posts
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => { dispatch(ActionCreators.fetchPosts()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
