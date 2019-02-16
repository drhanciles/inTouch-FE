import React from 'react'; 
import { shallow } from 'enzyme'; 
import CreateUser from './CreateUser.js'; 

describe('CreateUser', () => {
  let mockName; 
  let mockEmail; 
  let mockPassword; 
  let mockConfirmation; 
  beforeEach(() => {
    mockName = 'Kaytranada'; 
    mockEmail = 'yaboy@ymail.com'; 
    mockPassword = 'password'; 
    mockConfirmation = 'password'
  })
  
  it('should match snapshot', () => {
    const wrapper = shallow(<CreateUser />)

    expect(wrapper).toMatchSnapshot()
  }); 
}); 