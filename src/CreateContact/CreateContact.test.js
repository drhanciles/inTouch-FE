import React from 'react'; 
import { shallow } from 'enzyme'; 
import CreateContact from './CreateContact.js'; 

describe('CreateContact', () => {
  let mockName; 
  let mockContactType; 
  let mockContactInformation; 
  let mockFrequency; 
  let mockPriority; 
  let mockNotes; 

  beforeEach(() => {
    mockName = 'Rajaa'; 
    mockContactType = 'Email'; 
    mockContactInformation = 'rajaa@email'; 
    mockFrequency = 'weekly'; 
    mockPriority = 3; 
    mockNotes = ''; 
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<CreateContact />)

    expect(wrapper).toMatchSnapshot()
  });
});