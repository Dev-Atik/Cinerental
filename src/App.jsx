import { useReducer, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { movieContext, ThemeContext } from "./context/context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </movieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
