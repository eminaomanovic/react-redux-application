/**
 *
 * VideoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import 'font-awesome/css/font-awesome.min.css';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectPopularMovies,
  makeSelectPopularTvShows,
} from './selectors';
import LoadingIndicator from '../../components/LoadingIndicator';
import VideoItem from '../../components/VideoItem';

export class VideoList extends React.PureComponent {
  componentDidMount() {
    this.props.getMovies();
  }

  returnData(videos) {
    return videos ? (
      videos.map((video, index) => (
        <div key={index.toString()}>
          <VideoItem key={video.id} video={video} />
        </div>
      ))
    ) : (
      <div />
    );
  }

  render() {
    const { popularMovies, popularTvShows, loading } = this.props;
    if (loading) {
      return <LoadingIndicator />;
    }
    return (
      <div className="d-flex flex-column">
        <h5 className="pb-1 pt-2 pr-3 pl-3 border-bottom">Popular movies</h5>
        <div className="col-md-12">{this.returnData(popularMovies)}</div> <br />
        <h5 className="pb-1 pt-4 pr-3 pl-3 border-bottom">Popular series</h5>
        <div className="col-md-12">{this.returnData(popularTvShows)}</div>
      </div>
    );
  }
}

VideoList.propTypes = {
  loading: PropTypes.bool,
  getMovies: PropTypes.func,
  popularMovies: PropTypes.array,
  popularTvShows: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(loadMovies()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  popularMovies: makeSelectPopularMovies(),
  popularTvShows: makeSelectPopularTvShows(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoList', reducer });
const withSaga = injectSaga({ key: 'videoList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoList);
