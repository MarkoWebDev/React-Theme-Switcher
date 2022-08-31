import React from "react";
import { createContext, useContext, useState, useReducer } from "react";

const initialState = {
  theme: "light",
  number: 0,
  send: false,
  title: "",
  office: [],
  error: false,
};

export const ThemeContext = createContext();

export const CreateThemeContext = ({ children }) => {
  //   const [values, setValues] = useState(initialState);
  const [state, setState] = useState(initialState);

  return (
    <div>
      <ThemeContext.Provider value={[state, setState]}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default CreateThemeContext;
