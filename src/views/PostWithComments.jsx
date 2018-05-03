import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import User from '../components/User';
import Comments from '../views/Comments';

class PostWithComments extends Component {

  componentDidMount() {
    this.props.onGetPost(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps){
    const { userId } = this.props.post;
    if (userId){
      this.props.onGetUser(userId);
    }
  }

  render() {
    const { post, error, fetching, history, user } = this.props;
    return (
      <div>
        <Grid>
          <h1>Post</h1>
          <Row>
            <Col lg={12}>
              { (fetching && <h1>Loading...</h1>) ||
                (error && <h1>Error...</h1>) ||
                <Post showButton={false} history={history} key={ post.id } {...post} />
              }
              <User fetching={fetching} error={error} {...user}/>
            </Col>
          </Row>
        </Grid>
        <Comments { ...this.props }/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return Object.assign({}, state.posts, state.users)
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPost: (id) => { dispatch(ActionCreators.fetchPost(id)) },
    onGetUser: (id) => { dispatch(ActionCreators.fetchUser(id)) }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostWithComments);
