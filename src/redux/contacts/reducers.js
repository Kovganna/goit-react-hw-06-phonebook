import { combineReducers } from 'redux';
import dataContacts from '../../fileJson/contacts.json';

const initState = [{ dataContacts }];

const contactList = (state = initState, action) => {
  switch (action.type) {
    case 'contact/add':
      return [...state, action.payload];

    case 'contact/delete':
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const contactFilter = (state = '', action) => {
  return state;
};

export const contactReducer = combineReducers({
  contacts: contactList,
  filter: contactFilter,
});

// export const contactReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 };
//     case 'counter/decremented':
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// };
