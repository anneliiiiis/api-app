import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Comment extends Component {

  render() {
    const { name, body } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          { name }
          <Link to={`/`}>
            <Button className="pull-right" >
              delete
            </Button>
          </Link>
        </Panel.Heading>
        <Panel.Body>
          { body }
        </Panel.Body>
      </Panel>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
