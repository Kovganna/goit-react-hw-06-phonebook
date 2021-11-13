export const addContact = contact => ({
  type: 'contact/add',
  payload: contact,
});

export const removeContact = id => ({
  type: 'contact/delete',
  payload: { id },
});
