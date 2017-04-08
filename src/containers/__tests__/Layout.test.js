import React from 'react';
jest.mock('react-router-dom');
jest.mock('react-router');
import Layout from '../Layout';
import renderer from 'react-test-renderer';

test('renders with one element', () => {
  const component = renderer.create(
    <Layout>
      <h1>Stuff</h1>
    </Layout>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

