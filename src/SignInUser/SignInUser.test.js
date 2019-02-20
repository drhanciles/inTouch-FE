import React from 'react'; 
import { shallow } from 'enzyme'; 
import SignInUser from './SignInUser.js'; 

describe('SignInUser', () => {
  let mockUserName; 
  let mockPassword;

  beforeEach(() => {
    mockUserName = 'Rajaa'; 
    mockPassword = 'password'; 
  })

  it.skip('should match snapshot', () => {
    const wrapper = shallow(<SignInUser />)

    expect(wrapper).toMatchSnapshot()
  });
});