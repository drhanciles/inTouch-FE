import React from 'react'; 
import { shallow } from 'enzyme'; 
import SignInUser from './SignInUser.js'; 

describe('SignInUser', () => {
  let mockName; 
  let mockPassword;
  let mockEvent
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
    mockName = 'Rajaa'; 
    mockPassword = 'password'; 
    mockEvent = {
     target: {
       name: 'token',
       value: 'token12345'
      }
    }
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<SignInUser />)

    expect(wrapper).toMatchSnapshot()
  });
  
  describe('handleChange', () => {
    let mockEvent
    let wrapper
    
    beforeEach(() => {
      wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
      mockEvent = {
       target: {
         name: 'token',
         value: 'token12345'
        }
      }
    })
    
    it('should invoke handleChange when event occurs on an input', () => {
      wrapper.handleChange = jest.fn()
      wrapper.find('.user-name').simulate('change', mockEvent)
      
      expect(wrapper.handleChange).toHaveBeenCalled
    })
      
    it('should update state when handleChange is invoked on an input', () => {
      const expected = {
        userName: 'Derek',  
        password: '',
        disabled: true
      }
      
      wrapper.instance().handleChange(mockEvent)
      
      expect(wrapper.state()).toEqual(expected)
    })
    
    it('should invoke enableButton', () => {
      const mockFunction = jest.fn()
      wrapper.enableButton = mockFunction
      
      wrapper.instance().handleChange(mockEvent)
      
      expect(mockFunction).toHaveBeenCalled
    })
  })
  
  describe('enableButton', () => {
    let wrapper
    
    beforeEach(() => {
      wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
    })

    it('should toggle disabled if all values are present in input fields', () => {
      const mockState = {
        userName: 'Derek', 
        password: 'password',
        disabled: false
      }    
      const expected = {
        userName: 'Derek', 
        password: 'password',
        disabled: false
      }
      
      wrapper.setState(mockState)
      wrapper.instance().enableButton()
      
      expect(wrapper.state()).toEqual(expected)
    })
  })
  
  describe('handleSubmit', () => {
    let wrapper
    let mockSubmitEvent
    
    beforeEach(() => {
      wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
    })
    
    it('should invoke handleSubmit on click of the Sign In button', () => {
      mockSubmitEvent = {
        target: {},
        preventDefault: () => {}
      }
      
      wrapper.setState({
        disabled: false
      })
      
      wrapper.find('.sign-in-button').simulate('click', mockSubmitEvent)
      
      expect(wrapper.handleSubmit).toHaveBeenCalled
    })
  })
});
