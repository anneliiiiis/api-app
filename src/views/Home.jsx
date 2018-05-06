import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const ShowButton = props => {
  const link = props.link;
  const name = props.name;
  const buttonClass = props.buttonClass;
  return(
     <Link to={link}>
          <Button className= {buttonClass} >
            { name }
          </Button>
        </Link>
  )
}

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>HOME</h1>
        <ShowButton link={`/users`} buttonClass="btn-info" name="Show users"/>
        <ShowButton link={`/posts`} buttonClass="btn-info" name="Show posts"/>
      </div>
    );
  }
}
