import { mode, transparentize } from "@chakra-ui/theme-tools";
import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyle: SystemStyleObject = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { lightPalette, darkPalette, lightText, darkText, isDark, isA } =
    getColorInfo(c, theme);

  // set the color
  let [lightColor, darkColor] = [`${lightPalette}.11`, `${darkPalette}.11`];
  if (isDark) [lightColor, darkColor] = [darkColor, lightColor];
  if (c.startsWith("_gray")) [lightColor, darkColor] = [darkText, lightText];

  return {
    color: mode(lightColor, darkColor)(props),
    _hover: {
      bg: mode(`${lightPalette}.3`, `${darkPalette}.3`)(props),
    },
    _active: {
      bg: mode(`${lightPalette}.4`, `${darkPalette}.4`)(props),
    },
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`_gray.7`, `_grayDark.7`)(props);
  return {
    border: "1px solid",
    borderColor: c.startsWith("_gray") ? borderColor : "currentColor",
    ...variantGhost(props),
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { lightPalette, darkPalette, isBright, lightText, darkText } =
    getColorInfo(c, theme);

  if (c.startsWith("_gray")) {
    const bg = mode(`${lightPalette}.4`, `${darkPalette}.4`)(props);
    return {
      bg,
      color: mode(darkText, lightText)(props),
      _hover: {
        bg: mode(`${lightPalette}.5`, `${darkPalette}.5`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`${lightPalette}.6`, `${darkPalette}.6`)(props) },
    };
  }

  let bg = `${lightPalette}.9`;
  let color = isBright ? "_gray.12" : "_gray.1";
  let hoverBg = mode(`${lightPalette}.10`, `${darkPalette}.10`)(props);
  let activeBg = mode(`${lightPalette}.10`, `${darkPalette}.10`)(props);
  let background = mode(bg, `${darkPalette}.9`)(props);

  return {
    bg: background,
    color,
    _hover: {
      bg: hoverBg,
      _disabled: {
        bg,
      },
    },
    _active: { bg: activeBg },
  };
};

const variantLink: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { lightPalette, darkPalette } = getColorInfo(c, theme);
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${lightPalette}.10`, `${darkPalette}.10`)(props),
    },
  };
};

const variantUnstyled: SystemStyleObject = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0,
};

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2,
  },
};

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "_gray",
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
