import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import Comments from '../views/Comments';

export default class User extends Component {
  render() {
    const { id, name, fetching, error } = this.props;
    return (
      <div>
        { (fetching && <h1>Loading...</h1>) ||
          (error && <h1>Error...</h1>) ||
          <p key={ id }> { name } </p>
        }
      </div>
    );
  }
}