import React from 'react';
import Table from '../Table';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

function getFakeData() {
  return [
    {id: '1234', description: 'This is cool'},
    {id: '5678', description: 'This is cooler'}
  ];
}

it('renders with two rows and a header', () => {
  const component = renderer.create(
    <Table headers={['id', 'description']} data={getFakeData()} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
