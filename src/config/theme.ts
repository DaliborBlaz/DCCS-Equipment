import { loadTheme } from "office-ui-fabric-react";
import { getTheme } from "@fluentui/react";

export const Theme = loadTheme({
  defaultFontStyle: {
    fontFamily: "Volkhov, Serif",
    fontWeight: "regular",
  },
  palette: {
    themePrimary: "#f69325",
    themeLighterAlt: "#0a0601",
    themeLighter: "#271806",
    themeLight: "#492c0b",
    themeTertiary: "#935916",
    themeSecondary: "#d78220",
    themeDarkAlt: "#f69e3a",
    themeDark: "#f7ad58",
    themeDarker: "#f9c283",
    neutralLighterAlt: "#ffffff",
    neutralLighter: "#ffffff",
    neutralLight: "#ffffff",
    neutralQuaternaryAlt: "#ffffff",
    neutralQuaternary: "#ffffff",
    neutralTertiaryAlt: "#ffffff",
    neutralTertiary: "#595959",
    neutralSecondary: "#373737",
    neutralPrimaryAlt: "#2f2f2f",
    neutralPrimary: "#000000",
    neutralDark: "#151515",
    black: "#0b0b0b",
    white: "#ffffff",
  },
});


export const GetTheme= getTheme();