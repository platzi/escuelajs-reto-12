import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Footer';

describe('Footer testing', () => {
  test('Match Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
