import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import Albums from '../views/Albums';

class User extends Component {
  render() {
    const { id, name, username, email, phone } = this.props;
    return (
      <div>
        <Panel>
          <Panel.Heading key={name}>
            <h2> { name } </h2>
          </Panel.Heading>
          <Panel.Body>
            <p key={ username }>Username: { username } </p>
            <p key={ email }>Email: { email } </p>
            <p key={ phone }>Phone: { phone } </p>
          </Panel.Body>
          <Albums id ={ id }/>
        </Panel>
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