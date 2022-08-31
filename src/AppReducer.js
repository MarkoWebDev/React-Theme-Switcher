export const actionStates = {
  CHANGE_THEME: "CHANGE_THEME",
  CHECK_VALUE: "CHECK_VALUE",
  INCREASE: "INCREASE",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case actionStates.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case actionStates.CHECK_VALUE:
      return {
        ...state,
        send: action.payload,
      };
    case actionStates.INCREASE:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};
