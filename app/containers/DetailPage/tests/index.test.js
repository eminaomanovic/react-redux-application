import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import history from '../../../utils/history';
import App from '../../App';
const mockStore = configureStore([]);

describe('<App />', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it('should render details page', () => {
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
