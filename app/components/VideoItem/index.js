/**
 *
 * VideoItem
 *
 */

import React from 'react';
import './VideoItem.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';
import history from '../../utils/history';

const TitleDiv = styled.div`
  width: 220px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const YearDiv = styled.div`
  width: 220px !important;
  float: left;
  color: #9f9f9f;
`;

class VideoItem extends React.PureComponent {
  render() {
    const { video } = this.props;
    return (
      <Router history={history}>
        <Link
          to={`/detailPage/${video.first_air_date ? 'tv' : 'movie'}/${
            video.id
          }`}
          className="video-item item shadow-lg d-flex flex-column"
        >
          <img
            className="ui image movie-image"
            alt={video.overview}
            src={`https://image.tmdb.org/t/p/w500${video.poster_path}`}
          />
          <TitleDiv>{video.original_title}</TitleDiv>
          <TitleDiv>{video.original_name}</TitleDiv>
          <TitleDiv>{video.name}</TitleDiv>
          <YearDiv>
            {video.release_date
              ? video.release_date
              : 'No release date available'}
          </YearDiv>
        </Link>
      </Router>
    );
  }
}

VideoItem.propTypes = {
  video: PropTypes.object,
};

export default VideoItem;
