import React from 'react'; 
import { shallow } from 'enzyme'; 
import { SignInUser, mapDispatchToProps } from './SignInUser.js'; 
import { authenticateUser } from '../Thunks/authenticateUser.js'

describe('SignInUser', () => {
  let mockUserName; 
  let mockPassword;
  let mockEvent
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
    mockUserName = 'Rajaa'; 
    mockPassword = 'password'; 
    mockEvent = {
     target: {
       name: 'userName',
       value: 'Derek'
      }
    }
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  describe('handleChange', () => {
    let mockEvent
    let wrapper
    
    beforeEach(() => {
      wrapper = shallow(<SignInUser signIn={jest.fn()}/>)
      mockEvent = {
       target: {
         name: 'userName',
         value: 'Derek'
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
  
  describe('mapDispatchToProps', () => {
    let mockDispatch
    let mappedProps
    let mockUserName; 
    let mockPassword; 
    
    beforeEach(() => {
      mockDispatch = jest.fn()
      mappedProps = mapDispatchToProps(mockDispatch)
      mockUserName = 'Derek'
      mockPassword = 'password'
    })
    
    it('should dispatch the signInUser action when handleSubmit is called', () => {
      mappedProps.signIn(mockUserName, mockPassword)
      
      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function))
    })
  })
});
