import React from 'react';
import SearchForm from '../SearchForm';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import state from '../../State';

it('renders default form correctly', () => {
  const component = renderer.create(
    <Provider store={state}>
      <SearchForm />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

