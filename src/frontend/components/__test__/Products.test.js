import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Products from '../Products';

describe('Header component', () => {
  test('Match Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Products />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
