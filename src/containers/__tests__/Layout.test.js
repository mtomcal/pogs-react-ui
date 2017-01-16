import React from 'react';
import Layout from '../Layout';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

it('renders with one element', () => {
  const component = renderer.create(
    <Layout>
      <h1>Stuff</h1>
    </Layout>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

