import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get("window");

export const COLORS = {

    background: "#edddd6",

    black: "#000000",
    emerald: "#5cbf96",
    darkblue: "#235583",
    orange: "#e5985c",
    yellow: "#fbde72",
    white: "#ffffff",
    grey: "#707070",

    transparent: "transparent",
};

export const SIZES = {
    //global sizes
    base: 8,
    font: 28,
    radius: 30,
    padding: 16,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle : {fontFamily: "futur", fontSize: SIZES.largeTitle, lineHeight: 36},
    h1: {fontFamily: "Futura Extra Black font", fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: "Futura Bold font", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: "Futura Bold font", fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: "Futura Bold font", fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily: "futura medium bt", fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: "futura medium bt", fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: "futura medium bt", fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: "futura medium bt", fontSize: SIZES.body4, lineHeight: 22},
    body5: {fontFamily: "futura medium bt", fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = { COLORS, SIZES, FONTS};

export default appTheme;