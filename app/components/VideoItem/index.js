/**
 *
 * VideoItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';
import history from '../../utils/history';

class VideoItem extends React.PureComponent {
  render() {
    const { video } = this.props;
    if (video) {
      const firstAirDate = video.first_air_date ? video.first_air_date : null;
      return (
        <Router history={history}>
          <Link
            to={`/detailPage/${firstAirDate ? 'tv' : 'movie'}/${video.id}`}
            className="video-item item shadow-lg d-flex flex-column"
          >
            <img
              className="ui image movie-image"
              alt={video.overview}
              data-testid="video-img"
              src={`https://image.tmdb.org/t/p/w500${
                video && video.poster_path != null ? video.poster_path : ''
              }`}
            />
            <div className="details-title">{video.original_title}</div>
            <div className="details-title">{video.original_name}</div>
            <div className="year-div">
              {video.release_date
                ? video.release_date
                : 'No release date available'}
            </div>
          </Link>
        </Router>
      );
    }
    return <div />;
  }
}

VideoItem.propTypes = {
  video: PropTypes.object,
};

export default VideoItem;
