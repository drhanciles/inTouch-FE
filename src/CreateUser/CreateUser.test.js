import React from 'react'; 
import { shallow } from 'enzyme'; 
import { CreateUser, mapDispatchToProps } from './CreateUser.js'; 
import { createUser } from '../Thunks/createUser.js'


describe('CreateUser', () => {
  let mockName; 
  let mockEmail; 
  let mockPassword; 
  let mockConfirmation; 
  let mockEvent
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<CreateUser createNewUser={jest.fn()}/>)
    mockName = 'Kaytranada'; 
    mockEmail = 'yaboy@ymail.com'; 
    mockPassword = 'password'; 
    mockConfirmation = 'password';
    mockEvent = {
     target: {
       name: 'userName',
       value: 'Derek'
      }
    }
  })
  
  it('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should update state when handleChange occures on an input', () => {
    wrapper.handleChange = jest.fn()
    wrapper.find('.new-user-name').simulate('change', mockEvent)
    
    expect(wrapper.handleChange).toHaveBeenCalled
  })
})