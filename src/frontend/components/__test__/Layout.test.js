import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Layout from '../Layout';

describe('Header component', () => {
  test('Match Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Layout />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
