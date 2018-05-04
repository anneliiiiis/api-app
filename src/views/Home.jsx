import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Post from '../components/Post';
import Posts from '../views/Posts';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Link to={`/users`}>
          <Button className="btn-info" >
            Show users
          </Button>
        </Link>
        <Link to={`/posts`}>
          <Button className= "btn-info" >
            Show posts
          </Button>
        </Link>
      </div>
    );
  }
}
