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
    font-family: inherit;
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

  ::selection {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.primaryLight};
  }

  body::-webkit-scrollbar-track,
  .customScrollbars::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.darkBg};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  body::-webkit-scrollbar,
  .customScrollbars::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(0,0,0,0);
  }

  body::-webkit-scrollbar-thumb,
  .customScrollbars::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.gradient};
  }
`;

export default GlobalStyles;
