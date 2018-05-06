import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import _ from 'lodash';
import { ActionCreators } from '../actions';
import Comment from '../components/Comment';

class Comments extends Component {

  componentDidMount() {
    this.props.onGetComments(this.props.id);
  }

  render() {
    const { id, comments, error, fetching } = this.props;
    return (
      <Grid>
        <Row>
          <h1>Comments</h1>
          <Col lg={12}>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              _.map(comments[id], (comment, commentId) => {
                return (
                  <div>
                    <p>{id}</p>
                    <p>{commentId}</p>
                    <p>{}</p>
                    <Comment key={ commentId } {...comment} />
                  </div>
                )
              }) }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.comments
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetComments: (id) => { dispatch(ActionCreators.fetchComments(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
