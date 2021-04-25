/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from 'utils/history';

import HomePage from 'containers/HomePage/Loadable';
import DetailPage from 'containers/DetailPage/Loadable';
import { Route, Router, Switch } from 'react-router-dom';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper data-testid="app">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} history={history} />
          <Route
            path="/detailPage/:movieType/:videoId"
            component={DetailPage}
            history={history}
          />
        </Switch>
      </Router>
      <GlobalStyle />
    </AppWrapper>
  );
}
