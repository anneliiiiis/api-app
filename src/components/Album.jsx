import React, { Component } from 'react';
import { connect } from 'react-redux';

class Album extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <div>
        <p key={ id }>Title: { title } </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Album);