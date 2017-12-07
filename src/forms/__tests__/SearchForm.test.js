import React from 'react';
import Promise from 'bluebird';
import SearchForm from '../SearchForm';
import { mount } from 'enzyme';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('SearchForm', () => {
  let props;
  beforeEach(() => {
    props = {
      onSubmit: jest.fn(),
      search: {
        gene: 'stuff',
        keyword: '',
        pog: '',
      },
    };
  });
  describe('render states', () => {
    it('should render without crashing (sanity)', () => {
      const wrapper = mount(<SearchForm {...props} />);
      wrapper.mount();
      expect(wrapper.find('form')).toHaveLength(1);
    });
    it('should render gene text in form from props', () => {
      const wrapper = mount(<SearchForm {...props} />);
      wrapper.mount();
      // console.log(wrapper.debug());
      expect(
        wrapper.find('Field').find('input[name="gene"][value="stuff"]'),
      ).toHaveLength(1);
    });
    describe('form modification', () => {});
  });
});
