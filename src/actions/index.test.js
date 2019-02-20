import * as actions from './index.js'

describe('actions', () => {
  const userName = 'Derek'
  const token = 'token12345'

  it('should return a type of SIGN_IN_USER', () => {
    const expectedAction = {
      type: 'SIGN_IN_USER',
      userName, 
      token
    }
    
    const result = actions.signInUser(userName, token)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of SIGN_OUT_USER', () => {
    const expectedAction = {
      type: 'SIGN_OUT_USER'
    }
    
    const result = actions.signOutUser()
    
    expect(result).toEqual(expectedAction)
  })
  
  
  it('should return a type of IS_LOADING', () => {
    const isLoading = true
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading
    }
    
    const result = actions.isLoading(isLoading)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of HAS_ERRORED', () => {
    const hasErrored = true
    const expectedAction = {
      type: 'HAS_ERRORED',
      hasErrored
    }
    
    const result = actions.hasErrored(hasErrored)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of CREATE_CONTACT', () => {
    const contact = {
      name: 'Rajaa',
      id: 5
    }
   
    const expectedAction = {
      type: 'CREATE_CONTACT',
      contact
    }
    
    const result = actions.createContact(contact)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of UPDATE_CONTACT', () => {
    const contact = {
      name: 'Goku', 
      frequency: '5', 
      priority: '3', 
      notes: 'eats lots of food'
    }

    const expectedAction = {
      type: 'UPDATE_CONTACT', 
      contact
    }

    const result = actions.updateContact(contact)

    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of GET_ALL_CONTACTS', () => {
    const contacts = [
                        {
                          name: 'Derek', 
                          lastContacted: '2019-01-17'
                        }, 
                        {
                          name: 'Rajaa', 
                          lastContacted: '2019-01-18'
                        }
                      ]
                      
    const expectedAction = {
      type: 'GET_ALL_CONTACTS', 
      contacts
    }

    const result = actions.getAllContacts(contacts)

    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of SET_SELECTION', () => {
    const selection = 'add contact'

    const expectedAction = {
      type: 'SET_SELECTION', 
      selection: 'add contact'
    }

    const result = actions.setSelection(selection)

    expect(result).toEqual(expectedAction)
  })

  it('should return a type of UPDATE_OCCASIONS', () => {
    const occasion = {
      id: 2, 
      description: 'Graduation', 
      date: '02-28-2019'
    }

    const expectedAction = {
      type: 'UPDATE_OCCASIONS',
      occasion: {
        id: 2, 
        description: 'Graduation', 
        date: '02-28-2019'
      }
    }

    const result = actions.updateOccasions(occasion)

    expect(result).toEqual(expectedAction)
  })
  it('should return a type of UPDATE_REMINDERS', () => {
    const reminder = {
      "id": "1",
      "name": "Mom",
      "contact_details": [
        {
          "label": "phone",
          "value": "123-456-7890",
          "preferred": true
        }
      ],
      "occasions": [
        {
          "description": "birthday",
          "date": "1970-02-28"
        }
      ]
      }

      const expectedAction = {
        type: 'UPDATE_REMINDERS', 
        reminder
      }

      const result = actions.updateReminders(reminder)

      expect(result).toEqual(expectedAction)
  })
})