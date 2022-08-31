import React, { useContext, useReducer, useState } from "react";
import { ThemeContext } from "./CreateThemeContext";
import { AppReducer, actionStates } from "./AppReducer";
import "./Consumer.css";
import avatar from "./images/avatar.png";
import avatar1 from "./images/avatar1.png";

const Consumer = () => {
  //   const values = useContext(ThemeContext);
  //   console.log(values);

  const [value, setValue] = useContext(ThemeContext);

  const [state, dispatch] = useReducer(AppReducer, value);
  console.log("123", state);

  const { CHANGE_THEME, CHECK_VALUE, INCREASE } = actionStates;

  //   const [values, dispatch] = useRedcuer(AppReducer, state);

  //   const [values, setValues] = useContext(ThemeContext);

  //   const { theme, send, number } = values;
  //   console.log("Consumer", theme);

  //   const {
  //     state: { number, theme, send },
  //     dispatch,
  //   } = useContext(ThemeContext);

  //   console.log(send);
  //   console.log(theme);

  //   console.log("state", state);

  //   console.log("dispatch", dispatch);
  //   const { number, toggle } = useContext(ThemeContext);
  //   console.log(number, toggle);

  //   const [increaseNUmber, setIncreaseNumber] = number;
  //   const [toggleTheme, setToggleTheme] = toggle;

  //   console.log("+", increaseNUmber);
  //   console.log("theme", toggleTheme);

  //   const handleToggle = () => {
  //     setToggleTheme((prev) => (prev === "light" ? "dark" : "light"));
  //   };
  //   const numberUp = () => {
  //     setIncreaseNumber((prev) => prev + 1);
  //   };
  //   const numberDown = () => {
  //     setIncreaseNumber((prev) => prev - 1);
  //   };

  //   const handleSend = () => {};

  //   const handleBool = (e) => {
  //     dispatch({ send: !send });
  //   };

  const themeTest = () => {
    dispatch({
      type: CHANGE_THEME,
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  const handleBool = () => {
    dispatch({ type: CHECK_VALUE, payload: !state.send });
  };

  return (
    <div>
      {state.error === true ? (
        <h1>Error</h1>
      ) : (
        <div className={state.theme === "dark" ? "darkTheme" : "lightTheme"}>
          <div className={state.theme === "dark" ? "blockDark" : "blockLight"}>
            <h1
              className={state.theme === "dark" ? "headerDark" : "headerLight"}
            >
              {state.theme === "dark" ? "Dark" : "Light"}
            </h1>
            {state.theme === "light" ? (
              <img className="image1" src={avatar} alt="color"></img>
            ) : (
              <img className="image2" src={avatar1} alt="color"></img>
            )}
            <div className="btn">
              <button
                className={
                  state.theme === "dark" ? "switchLight" : "switchDark"
                }
                onClick={themeTest}
              >
                {state.theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consumer;
