import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Products from '../Products';

describe('Product component', () => {
  test('Match Snapshot', () => {
    const product = create(
      <ProviderMock>
        <Products />
      </ProviderMock>,
    );
    expect(product.toJSON()).toMatchSnapshot();
  });
});
