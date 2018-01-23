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
    describe('form modification', () => {
      const testFieldHelper = (name, value, expectedResult) => {
        const wrapper = mount(<SearchForm {...props} />);
        wrapper.mount();
        wrapper.find(`[name="${name}"]`).simulate('change', {
          target: {
            id: name,
            value,
          },
        });
        return sleep(1)
          .then(() => {
            // Don't simulate if you use form based submit but use DOM click instead
            // otherwise the form context is lost
            wrapper
              .find('button[type="submit"]')
              .get(0)
              .click();
            return sleep(1);
          })
          .then(() => {
            expect(props.onSubmit).toHaveBeenCalled();
            // Get first call and first argument to compare
            expect(props.onSubmit.mock.calls[0][0]).toEqual(expectedResult);
          });
      };
      it('successfully submits keyword search', () => {
        return testFieldHelper('keyword', 'MySearchString', {
          gene: 'stuff',
          keyword: 'MySearchString',
          pog: '',
        });
      });
      it('successfully submits gene search', () => {
        return testFieldHelper('gene', 'MySearchString', {
          gene: 'MySearchString',
          keyword: '',
          pog: '',
        });
      });
      it('successfully submits pog search', () => {
        return testFieldHelper('pog', 'MySearchString', {
          gene: 'stuff',
          keyword: '',
          pog: 'MySearchString',
        });
      });
    });
  });
});
