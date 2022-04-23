import { mode, StyleFunctionProps, Styles } from "@chakra-ui/theme-tools";

export function globalStyles(props: StyleFunctionProps) {
  return {
    body: {
      fontFamily: "body",
      color: mode("_gray.12", "_gray.1")(props),
      bg: mode("_gray.1", "_grayDark.1")(props),
      transitionProperty: "background-color",
      transisionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("_gray.8", "_grayDark.8")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("_gray.6", "_grayDark.6")(props),
      wordWrap: "break-word",
    },
  };
}

const styles: Styles = {
  global: globalStyles,
};

export default styles;
