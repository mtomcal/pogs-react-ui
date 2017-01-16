import React from 'react';
import RenderField from '../RenderField';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('renderField', () => {
  it('renders default RenderField correctly', () => {
    const component = renderer.create(
      <RenderField label="Test" input={{name: 'test'}} meta={{touched: false}}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders error message if error is present', () => {
    const component = shallow(
      <RenderField label="Test" input={{name: 'test', value: 'afdadsfasdf'}} meta={{touched: true, error: 'should be something else'}}/>
    );
    const hasErrorClass = component.find('input').hasClass('invalid');
    const dataError = component.find('label').prop('data-error');
    expect(hasErrorClass).toBeTruthy();
    expect(dataError).toEqual('should be something else');
  });
});
