import React from 'react'; 
import { shallow } from 'enzyme'; 
import HomePage from './HomePage.js'; 

describe('HomePage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<HomePage />)

    expect(wrapper).toMatchSnapshot()
  })
})