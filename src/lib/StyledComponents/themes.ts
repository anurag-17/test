// import { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

//color constants
const COLORS = {
  primary: "#C92A2A",
  red: "#C20000",
  secondary: "#F1F3F5",
  text: "#212529",
  border: "#707070",
  black: "#212529",
  dark: "#343A40",
  blackThick: "#000000",
  white: "#FFFFFF",
  pitch: "#C92A2A52",
  lightPitch: "#c92a2a52",
  thinPitch: "#C92A2A1A",
  ash: "#E6E6E6",
  lightGrey: "#E6E6E6",
  darkGrey: "#6A6D70",
  grey: "#868E96",
  lightPink: "#FFF5F5",
  thinGrey: "#ADB5BD",
  inputBackground: "#fff5f5",
  inputBorder: "#DEE2E6",
  dropDownBackground: "#30353B",
  dropDowanBorder: "#495057",
};

//app global style
const GlobalStyle = createGlobalStyle`

  body {
    background:${COLORS.secondary};
    margin:0;
    height:100%;
    font-family: 'Source Sans Pro', sans-serif;
  }
  ul {
    margin:0
  }
  
  
`;

// app theme
const theme = {
  borderRadius: "5px",

  colors: {
    main: COLORS.primary,
    secondary: COLORS.secondary,
  },
};

export { theme, COLORS, GlobalStyle };
