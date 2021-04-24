/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
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

class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getMovies();
  }

  returnData(videos) {
    let moviesDiv = null;
    if (videos && videos.results) {
      moviesDiv = videos.results ? (
        videos.results.map((video, index) => (
          <div key={index.toString()}>
            <VideoItem
              key={video.id}
              video={video}
              onVideoSelect={this.props.onVideoSelect}
            />
          </div>
        ))
      ) : (
        <div />
      );
    }
    return moviesDiv;
  }

  render() {
    if (this.props.loading) {
      return <LoadingIndicator />;
    }
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <div className="d-flex flex-column">
          <h3 className="pl-3 pb-1 pt-2 border-bottom">
            <b>eMMovie</b>
          </h3>
          <h5 className="pb-1 pt-2 pr-3 pl-3 border-bottom">Popular movies</h5>
          <div className="col-md-12">
            {this.returnData(this.props.popularMovies)}
          </div>
          <h5 className="pb-1 pt-4 pr-3 pl-3 border-bottom">Popular series</h5>
          <div className="col-md-12">
            {this.returnData(this.props.popularTvShows)}
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  getMovies: PropTypes.func,
  popularMovies: PropTypes.object,
  popularTvShows: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
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

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
