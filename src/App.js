import "./App.css";
import Consumer from "./Consumer";
import CreateThemeContext from "./CreateThemeContext";

function App() {
  return (
    <CreateThemeContext>
      <Consumer></Consumer>
    </CreateThemeContext>
  );
  //https://stackoverflow.com/questions/60866924/how-to-pass-multiple-states-through-react-context-api
}

export default App;
