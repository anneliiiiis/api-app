import React, { Component } from 'react';

export default class User extends Component {
  render() {
    const { id, name, username, email, fetching, error, user } = this.props;
    return (
      <div>
        <p key={ name }>Name: { name } </p>
        <p key={ username }>Username: { username } </p>
        <p key={ email }>Email: { email } </p>
      </div>
    );
  }
}