import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';

import { ActionCreators } from '../actions';
import Album from '../components/Album';

class Albums extends Component {

  componentDidMount() {
    this.props.onGetAlbums(this.props.id);
  }

  render() {
    const { id, albums, error, fetching } = this.props;
    return (
      <Grid>
        <h3>Albums</h3>
        <Row>
          <Col lg={12}>
            { (fetching && <h1>Loading...</h1>) ||
              (error && <h1>Error...</h1>) ||
              _.map(albums[id], (album, albumId) => {
                return (
                  <Album key={ albumId } {...album} />
                )
              }) }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.albums
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAlbums: (id) => { dispatch(ActionCreators.fetchAlbums(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
