import React from 'react';
import SearchForm from '../SearchForm';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import state from '../../State';

describe('SearchForm', () => {
  test('renders gene field', () => {
    const component = mount(
      <Provider store={state}>
        <SearchForm onSubmit={jest.fn} />
      </Provider>,
    );
    expect(component.find('input[name="gene"]').exists()).toEqual(true);
  });
  test('renders keyword field', () => {
    const component = mount(
      <Provider store={state}>
        <SearchForm onSubmit={jest.fn} />
      </Provider>,
    );
    expect(component.find('input[name="keyword"]').exists()).toEqual(true);
  });
  test('renders pog field', () => {
    const component = mount(
      <Provider store={state}>
        <SearchForm onSubmit={jest.fn} />
      </Provider>,
    );
    expect(component.find('input[name="pog"]').exists()).toEqual(true);
  });
});
