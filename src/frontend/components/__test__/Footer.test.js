import React from 'react';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
  test('Match Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
  /*
  test('footer haves class .footer', () => {
    const footer = shallow(<Footer />);
    const footerElem = footer.find('footer');
    console.log(`footer element is ${JSON.stringify(footer)}`);
    expect(footerElem.hasClass('footer')).toBe(true);
  });
  */
});
