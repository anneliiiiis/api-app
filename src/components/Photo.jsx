import React, { Component } from 'react';
import { connect } from 'react-redux';

class Album extends Component {
  render() {
    const { title, id, url } = this.props;
    return (
      <div>
        <p key={ id }>Title: { title } </p>
        <p key={ id }>Url: { url } </p>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
