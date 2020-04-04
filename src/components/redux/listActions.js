const uuidv4 = require("uuid/v4");

export const Type = {
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT"
};

export const addContact = (name, number) => {
  return {
    type: Type.ADD_CONTACT,
    payload: {
      name,
      number,
      id: uuidv4()
    }
  };
};

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: id
});

// export const fillName = event => ({
//   type: Type.FILL_NAME,
//   payload: event.target.name
// });
