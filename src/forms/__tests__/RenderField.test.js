import React from 'react';
import RenderField from '../RenderField';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('renderField', () => {
  test('renders default RenderField correctly', () => {
    const component = renderer.create(
      <RenderField label="Test" input={{name: 'test'}} meta={{touched: false}}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders error message if error is present', () => {
    const component = shallow(
      <RenderField label="Test" input={{name: 'test', value: 'afdadsfasdf'}} meta={{touched: true, error: 'should be something else'}}/>
    );
    const dataError = component.find('.text-danger').text();
    expect(dataError).toEqual('should be something else');
  });
});
