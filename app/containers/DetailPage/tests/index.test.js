import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import history from '../../../utils/history';
import App from '../../App';

let container;
let store;
let initialState;
beforeEach(() => {
  container = document.createElement('div');
  initialState = {};
  store = configureStore(initialState, history);
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('<DetailPage />', () => {
  it('should render title', () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>,
        container,
      );
    });
  });
});
