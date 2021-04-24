import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from 'utils/history';
import App from '../index';
const mockStore = configureStore([]);

describe('<App />', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      loading: true,
      error: false,
    });
  });

  it('should render with videos', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
    );
    const component = renderer.getRenderOutput();
    expect(component).toMatchSnapshot();
  });
});
