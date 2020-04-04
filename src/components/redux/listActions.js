export const Type = {
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  OPEN_EXISET_ALERT: "OPEN_EXISET_ALERT",
  CLOSE_EXISET_ALERT: "CLOSE_EXISET_ALERT",
  FILL_FILTER: "FILL_FILTER"
};

export const addContact = newContact => {
  return {
    type: Type.ADD_CONTACT,
    payload: newContact
  };
};

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: id
});


