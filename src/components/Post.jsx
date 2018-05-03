import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ShowButton(props) {
  const showButton = props.showButton;
  const id = props.id;
  const history = props.history;
  if (showButton) {
    return (
      <Button>
        <Link to={`/posts/${id}`}>
          Show
        </Link>
      </Button>
    )
  }
  return(
    <Button onClick={() => history.push('/')}>
      Back
    </Button>
  )
}

class Post extends Component {

  render() {
    const { title, body, id, history, showButton } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          { title }
          <ShowButton showButton={showButton} id={id} history={history}/>
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
