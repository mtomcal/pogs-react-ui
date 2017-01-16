import React from 'react';
jest.mock('react-router/Link', () => {
  return function (props) {
    return (<a className={props.className} href="#">{props.children}</a>);
  }
});
import Layout from '../Layout';
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

