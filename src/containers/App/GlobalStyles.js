import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  vertical-align: middle;
  box-sizing: border-box;
  transition: all 0.2s linear 0s, color 0s, font 0s;
  color: inherit;
  font: inherit;
}

*:focus {
  outline: 0;
}

svg {
  fill: currentColor;
}

li,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; */
  font-family: "Nunito";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background: ${({ theme }) => theme.bodyBg};
  color: ${({ theme }) => theme.text};
  max-width: 100%;
  overflow-x: hidden;
}
`;

export default GlobalStyles;
