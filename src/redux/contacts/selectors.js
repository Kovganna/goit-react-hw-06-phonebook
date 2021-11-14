const getContacts = state => state.contacts.contactItems;

const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const lowerCasedFilter = getFilter(state).toLowerCase();

  return getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(lowerCasedFilter),
  );
};
const selectors = {
  getContacts,
  getFilter,
  getFilteredContacts,
};
export default selectors;
