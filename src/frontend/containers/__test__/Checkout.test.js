import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Checkout from '../Checkout';

describe('Checkout component', () => {
  test('Match Snapshot', () => {
    const checkout = create(
      <ProviderMock>
        <Checkout />
      </ProviderMock>,
    );
    expect(checkout.toJSON()).toMatchSnapshot();
  });
});
