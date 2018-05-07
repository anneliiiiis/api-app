import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { ActionCreators } from '../actions';

class Album extends Component {
  constructor(props){
    super (props)
  }

  render() {
    const { title, id } = this.props;
    return (
      <div>
        <p key={ id }>Title: { title }
          <Button className="btn-danger" onClick={() => this.props.dispatch(ActionCreators.deleteAlbum(id))}>
            Delete album
          </Button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);