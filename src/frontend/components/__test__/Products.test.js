import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Products from '../Products';

describe('Products component', () => {
  test('Match Snapshot', () => {
    const products = create(
      <ProviderMock>
        <Products />
      </ProviderMock>,
    );
    expect(products.toJSON()).toMatchSnapshot();
  });
});
