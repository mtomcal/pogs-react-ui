import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../App';
import state from '../State';

it('renders without crashing', () => {
  const wrapper = mount(
    <Provider store={state}>
      <App />
    </Provider>,
  );

  expect(wrapper.find('BrowserRouter')).toHaveLength(1);
});
