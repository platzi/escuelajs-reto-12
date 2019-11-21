import { addToCart, setProducts } from '../index';
import productMock from '../../__mocks__/productMock';

describe('Actions', () => {
  it('It should create an action to add To Cart', () => {
    const payload = productMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(addToCart(payload)).toEqual(expected);
  });
  it('It should create an action to set Products', () => {
    const payload = productMock;
    const expected = {
      type: 'SET_PRODUCTS',
      payload,
    };
    expect(setProducts(payload)).toEqual(expected);
  });
});
