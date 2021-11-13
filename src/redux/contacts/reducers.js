import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import dataContacts from '../../fileJson/contacts.json';

const initState = [{ id: '', dataContacts }];

// const contactList = (state = initState, action) => {
//   switch (action.type) {
//     case 'contact/add':
//       return [...state, action.payload];

//     case 'contact/delete':
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

const contactList = createReducer(initState, {
  'contact/add': (state, { payload }) => [...state, payload],
  'contact/delete': (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

// const contactFilter = (state = '', { payload }) => {
//   return payload;
// };

const contactFilter = createReducer('', {
  'contact/filter': (_, { payload }) => payload,
});

export const contactReducer = combineReducers({
  contacts: contactList,
  filter: contactFilter,
});
