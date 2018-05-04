import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import User from '../components/User';

class Albums extends Component {

  componentDidMount() {
    this.props.onGetAlbums();
  }

  render() {
    const { albums, error, fetching } = this.props;
    return (
      <Grid>
        <h1>Albums</h1>
        <Row>
          <Col lg={12}>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              (albums && _.map(albums, (user, id) => {
                return (
                  <User key={ album.id } {...album} />
                )
              })) }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.users
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUsers: () => { dispatch(ActionCreators.fetchUsers()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
