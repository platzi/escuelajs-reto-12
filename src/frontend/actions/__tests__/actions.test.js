import { addToCart, removeToCart } from '../index';
import productMock from '../../__mocks__/productMock';

describe('Actions', () => {
  it('It should add products to my cart', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload: productMock,
    };
    expect(addToCart(productMock)).toEqual(expected);
  });

  it('It should remove products to my cart', () => {
    const expected = {
      type: 'REMOVE_TO_CART',
      payload: {
        item: productMock,
        key: 0,
      },
    };
    expect(removeToCart(productMock, 0)).toEqual(expected);
  });
});
