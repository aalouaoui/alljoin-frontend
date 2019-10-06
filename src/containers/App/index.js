import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import defaultTheme from "./defaultTheme";
import Routes from "routes";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  </ThemeProvider>
);

export default App;
