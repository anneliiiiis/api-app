import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Photo from '../components/Photo';

class Photos extends Component {

  componentDidMount() {
    this.props.onGetPhotos(this.props.id);
  }

  render() {
    const { id, photos, error, fetching } = this.props;
    return (
      <Grid>
        <h3>Photos</h3>
        <Row>
          <Col lg={12}>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              _.map(photos[id], (photo, photoId) => {
                return (
                  <Photo key={ photoId } {...photo} />
                )
              }) }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.photos
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPhotos: (id) => { dispatch(ActionCreators.fetchPhotos(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
