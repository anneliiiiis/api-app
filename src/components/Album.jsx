import React, { Component } from 'react';
import { connect } from 'react-redux';

class Album extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p key={ name }>Name: { name } </p>
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