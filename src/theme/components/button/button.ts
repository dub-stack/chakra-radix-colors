import { mode } from "@chakra-ui/theme-tools";
import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

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
  let { light, dark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo(c, theme);

  // set the color
  let [lightColor, darkColor] = [`${light}.11`, `${dark}.11`];
  if (c.startsWith("_gray"))
    [lightColor, darkColor] = [`${_gray}.12`, `${_grayDark}.12`];

  return {
    color: mode(lightColor, darkColor)(props),
    _hover: {
      bg: mode(`${light}.4`, `${dark}.4`)(props),
    },
    _active: {
      bg: mode(`${light}.5`, `${dark}.5`)(props),
    },
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { isDark } = getColorInfo(c, theme);

  let [lightColor, darkColor] = ["_gray.7", "_grayDark.7"];
  if (isDark) [lightColor, darkColor] = [darkColor, lightColor];
  const borderColor = mode(lightColor, darkColor)(props);

  return {
    border: "1px solid",
    borderColor: c.startsWith("_gray") ? borderColor : "currentColor",
    ...variantGhost(props),
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { light, dark, isBright } = getColorInfo(c, theme);

  if (c.startsWith("_gray")) {
    const bg = mode(`${light}.4`, `${dark}.4`)(props);
    return {
      bg,
      color: mode(`${light}.12`, `${dark}.12`)(props),
      _hover: {
        bg: mode(`${light}.5`, `${dark}.5`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`${light}.6`, `${dark}.6`)(props) },
    };
  }

  let bg = `${light}.9`;
  let color = isBright ? "_grayDark.1" : "_gray.1";
  let hoverBg = mode(`${light}.10`, `${dark}.10`)(props);
  let activeBg = mode(`${light}.10`, `${dark}.10`)(props);
  let background = mode(bg, `${dark}.9`)(props);

  return {
    bg: background,
    color,
    _hover: {
      bg: hoverBg,
      _disabled: {
        background,
      },
    },
    _active: { bg: activeBg },
  };
};

const variantLink: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { light, dark } = getColorInfo(c, theme);
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${light}.9`, `${dark}.9`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${light}.10`, `${dark}.10`)(props),
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
