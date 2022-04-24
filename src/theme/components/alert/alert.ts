import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
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
  const { light, dark } = getColorInfo(c, theme);

  return mode(`${light}.4`, `${dark}.4`)(props);
}

const variantSubtle: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { light, dark, isDark } = getColorInfo(c, theme);
  let { light: lightGray, dark: darkGray } = getColorInfo("_gray", theme);

  if (isDark) [lightGray, darkGray] = [darkGray, lightGray];

  return {
    container: {
      bg: getBg(props),
      color: mode(`${darkGray}.1`, `${lightGray}.1`)(props),
    },
    icon: { color: mode(`${light}.9`, `${dark}.9`)(props) },
  };
};

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { light, dark, isDark } = getColorInfo(c, theme);
  let { light: lightGray, dark: darkGray } = getColorInfo("_gray", theme);

  if (isDark) [lightGray, darkGray] = [darkGray, lightGray];

  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(`${light}.9`, `${dark}.9`)(props),
      bg: getBg(props),
      color: mode(`${darkGray}.1`, `${lightGray}.1`)(props),
    },
    icon: {
      color: mode(`${light}.9`, `${dark}.9`)(props),
    },
  };
};

const variantTopAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { light, dark, isDark } = getColorInfo(c, theme);
  let { light: lightGray, dark: darkGray } = getColorInfo("_gray", theme);

  if (isDark) [lightGray, darkGray] = [darkGray, lightGray];

  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(`${light}.9`, `${dark}.9`)(props),
      bg: getBg(props),
      color: mode(`${darkGray}.1`, `${lightGray}.1`)(props),
    },
    icon: {
      color: mode(`${light}.9`, `${dark}.9`)(props),
    },
  };
};

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  let { light, dark, isBright, isDark } = getColorInfo(c, theme);
  let { light: gray, dark: grayDark } = getColorInfo("_gray", theme);

  if (isBright) [gray, grayDark] = [grayDark, grayDark];
  if (isDark) [gray, grayDark] = [grayDark, gray];

  return {
    container: {
      bg: mode(`${light}.9`, `${dark}.9`)(props),
      color: mode(`${gray}.1`, `${grayDark}.1`)(props),
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
