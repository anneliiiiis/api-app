import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { name, username, email, phone } = this.props;
    return (
      <div className="media">
        <div class="media-body">
        <h4 key={ name }>{ name } </h4>
        <p key={ username }>Username: { username } </p>
        <p key={ email }>Email: { email } </p>
        <p key={ phone }>Phone: { phone } </p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(User);