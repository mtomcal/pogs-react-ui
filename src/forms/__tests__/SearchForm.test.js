import React from 'react';
import SearchForm from '../SearchForm';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import state from '../../State';

describe('SearchForm', () => {
  test('renders default form correctly', () => {
    const component = renderer.create(
      <Provider store={state}>
        <SearchForm />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders gene field', () => {
    const component = mount(
      <Provider store={state}>
        <SearchForm />
      </Provider>
    );
    expect(component.find('input[name="gene"]').exists()).toEqual(true);
  });
  test('renders keyword field', () => {
    const component = mount(
      <Provider store={state}>
        <SearchForm />
      </Provider>
    );
    expect(component.find('input[name="keyword"]').exists()).toEqual(true);
  });
  test('renders pog field', () => {
    const component = mount(
      <Provider store={state}>
        <SearchForm />
      </Provider>
    );
    expect(component.find('input[name="pog"]').exists()).toEqual(true);
  });
});



