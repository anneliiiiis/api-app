import React, { Component } from 'react';

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