import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
