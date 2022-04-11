import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import { getColor, mode, transparentize } from "@chakra-ui/theme-tools";
import type {
  PartsStyleObject,
  PartsStyleFunction,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

// Please visit: https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
// to understand which values were used where. This link provides a style guide for using colors
// for different UI purposes.

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {
    px: 4,
    py: 3,
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2,
  },
  description: {
    lineHeight: 6,
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6,
  },
};

function getBg(props: StyleFunctionProps): string {
  const { theme, colorScheme: c } = props;
  const { lightPalette, darkPalette } = getColorInfo(c, theme);

  // Using step 4, 5, 6 colors as this is an exception we want
  // to highlight instead of 3, 4, 5. See the following link for more
  // details: https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale#steps-35-component-backgrounds
  return mode(`${lightPalette}.4`, `${darkPalette}.4`)(props);
}

const variantSubtle: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { lightPalette, darkPalette } = getColorInfo(c, theme);

  return {
    container: { bg: getBg(props) },
    icon: { color: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props) },
  };
};

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { lightPalette, darkPalette } = getColorInfo(c, theme);

  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      bg: getBg(props),
    },
    icon: {
      color: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
    },
  };
};

const variantTopAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { lightPalette, darkPalette } = getColorInfo(c, theme);

  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      bg: getBg(props),
    },
    icon: {
      color: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
    },
  };
};

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { lightPalette, darkPalette, lightText, darkText, isBright } =
    getColorInfo(c, theme);

  if (isBright) [lightText, darkText] = [darkText, darkText];

  return {
    container: {
      bg: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      color: mode(lightText, darkText)(props),
    },
  };
};

const variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid,
};

const defaultProps = {
  variant: "subtle",
  colorScheme: "blue",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  defaultProps,
};
