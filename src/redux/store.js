import { createStore } from 'redux';
import dataContacts from '../fileJson/contacts.json';

const initialState = { contacts: dataContacts };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'input/Add':
      //   return { contacts: state.contacts + payload };
      return { contacts: [state, ...payload] };

    case 'input/Delete':
      return {
        contacts: state.contacts.filter(contact => contact.id !== payload),
        // contacts: state.contacts - payload,
      };

    // case 'filter':
    //     const filterContact = filter.toLowerCase();
    //     return {state.filter(contact =>
    //         contact.name.toLowerCase().includes(filterContact),
    //       )};

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
