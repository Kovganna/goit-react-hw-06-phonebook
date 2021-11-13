import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const removeContact = createAction('contact/delete');
export const filterContacts = createAction('contact/filter');

// export const addContact = contact => ({
//   type: 'contact/add',
//   payload: contact,
// });

// export const removeContact = id => ({
//   type: 'contact/delete',
//   payload: { id },
// });

// export const filterContacts = value => ({
//   type: 'contact/filter',
//   payload: value,
// })
