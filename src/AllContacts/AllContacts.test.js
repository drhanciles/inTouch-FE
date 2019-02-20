import React from 'react'; 
import { shallow } from 'enzyme'; 
import AllContacts from './AllContacts.js'; 

describe('AllContacts', () => {
  let allContacts;

  beforeEach(() => {
    allContacts =[{name: 'Derek', lastContacted: '2019-01-17'}, {name: 'Rajaa', lastContacted: '2019-01-18'}, {name: 'Will', lastContacted: '2019-01-19'}]; 
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<AllContacts />)

    expect(wrapper).toMatchSnapshot()
  });
});