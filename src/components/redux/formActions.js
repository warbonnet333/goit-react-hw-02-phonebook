export const Type = {
  FILL_NAME: "FILL_NAME",
  FILL_NUMBER: "FILL_NUMBER",
  TOGGLE_SHOWN: "TOGGLE_SHOWN"
};

export const fillName = event => ({
  type: Type.FILL_NAME,
  payload: event.target.value
});

export const fillNumber = event => ({
  type: Type.FILL_NUMBER,
  payload: event.target.value
});
