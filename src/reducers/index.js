import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer.js';
import { hasErroredReducer } from './hasErroredReducer.js';
import { userReducer } from './userReducer.js';
import { contactsReducer } from './contactsReducer.js';
import { contactReducer } from './contactReducer.js';
import { selectionReducer } from './selectionReducer.js';
import { suggestionsReducer } from './suggestionsReducer.js';

export const rootReducer = combineReducers({
  loading: isLoadingReducer,
  errored: hasErroredReducer,
  selection: selectionReducer,
  user: userReducer,
  contacts: contactsReducer,
  contact: contactReducer,
  suggestions: suggestionsReducer
})
