import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import User from '../components/User';

class Users extends Component {

  componentDidMount() {
    this.props.onGetUsers();
  }

  render() {
    const { users, error, fetching } = this.props;
    return (
      <Grid>
        <h1>Users</h1>
        <Row>
          <Col lg={12}>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              (users && _.map(users, (user, id) => {
                return (
                  <User key={ user.id } {...user} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
