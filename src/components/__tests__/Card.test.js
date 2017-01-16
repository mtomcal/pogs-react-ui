import React from 'react';
import Card from '../Card';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

it('renders with two elements', () => {
  const component = renderer.create(
    <Card>
      <h1>Stuff</h1>
      <p>More stuff</p>
    </Card>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
