export const addContact = value => ({
  type: 'input/Add',
  payload: value,
});

export const removeContact = id => {
  return {
    type: 'input/Delete',
    payload: id,
  };
};

export const filterContact = id => {
  return {
    type: 'filter',
    payload: includes(value),
  };
};
