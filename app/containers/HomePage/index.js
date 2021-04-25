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
import { changeTerm } from './actions';
import reducer from './reducer';
import saga from './saga';
import 'font-awesome/css/font-awesome.min.css';
import { makeSelectTerm } from './selectors';
import VideoList from '../VideoList/Loadable';
import { loadMovies } from '../VideoList/actions';

class HomePage extends React.PureComponent {
  render() {
    const { term, onChangeTerm } = this.props;
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
          <div>
            <input
              placeholder="Type movie name"
              id="term"
              className="form-control w-100 form-control-sm h-auto"
              type="search"
              value={term}
              onChange={onChangeTerm}
            />
          </div>
          <VideoList />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  onChangeTerm: PropTypes.func,
  term: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeTerm: e => {
      dispatch(changeTerm(e.target.value));
      dispatch(loadMovies());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  term: makeSelectTerm(),
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
