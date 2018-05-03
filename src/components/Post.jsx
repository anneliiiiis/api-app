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
      <Link to={`/posts/${id}`}>
        <Button className="pull-right" >
          Show
        </Button>
      </Link>

    )
  }
  return(
    <Button className="pull-right" onClick={() => history.push('/')}>
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
          <p>{ title }</p>
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
