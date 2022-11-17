export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const normalizedFilter = state.filter.toLowerCase();

  return state.contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};
