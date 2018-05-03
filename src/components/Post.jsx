import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    const { title, body, id } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          { title }
          <Button>
            {<Link to={`/posts/${id}`}>
              Show
            </Link>}
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
