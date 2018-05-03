import React, { Component } from 'react';

export default class User extends Component {
  render() {
    const { id, name, fetching, error, user } = this.props;
    return (
      <div>
        <p key={ id }> { name } </p>
      </div>
    );
  }
}