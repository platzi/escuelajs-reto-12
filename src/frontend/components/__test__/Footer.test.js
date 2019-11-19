import React from 'react';
import { create } from 'react-test-renderer';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
  test('Match snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  test('footer has at least 1 division tag', () => {
    const footer = render(<Footer />);
    expect(footer.find('p')).toHaveLength(1);
  });

  test('footer has at least 1 anchor tag', () => {
    const footer = render(<Footer />);
    expect(footer.find('p')).toHaveLength(1);
  });
});
