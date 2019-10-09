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

  i {
    font-style: normal;
    color: ${({ theme }) => theme.grey};
  }

  body {
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; */
    font-family: "Nunito";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background: ${({ theme }) => theme.black0};
    color: ${({ theme }) => theme.white0};
    max-width: 100%;
    overflow-x: hidden;
  }

  ::selection {
    color: ${({ theme }) => theme.white0};
    background: ${({ theme }) => theme.primary0};
  }

  body::-webkit-scrollbar-track,
  .customScrollbars::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.black2};
    border-radius: 15px;
  }

  body::-webkit-scrollbar,
  .customScrollbars::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(0,0,0,0);
  }

  body::-webkit-scrollbar-thumb,
  .customScrollbars::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.primary0};
  }
`;

export default GlobalStyles;
