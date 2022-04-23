import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyleControl: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { lightPalette, darkPalette, lightText, darkText, isBright, isDark } =
    getColorInfo(c, theme);
  let { lightPalette: _grayLight, darkPalette: _grayDark } = getColorInfo(
    "_gray",
    theme
  );
  let { lightPalette: redLight, darkPalette: redDark } = getColorInfo(
    "red",
    theme
  );

  if (isBright && isDark) [lightText, darkText] = [lightText, lightText];
  else if (isBright) [lightText, darkText] = [darkText, darkText];

  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: lightText,

    _checked: {
      bg: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      borderColor: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      color: mode(lightText, darkText)(props),

      _hover: {
        bg: mode(`${lightPalette}.10`, `${darkPalette}.10`)(props),
        borderColor: mode(`${lightPalette}.10`, `${darkPalette}.10`)(props),
      },

      _disabled: {
        borderColor: mode(`${_grayLight}.4`, `${_grayDark}.4`)(props),
        bg: mode(`${_grayLight}.4`, `${_grayDark}.4`)(props),
        color: mode(`${_grayLight}.9`, `${_grayDark}.9`)(props),
      },
    },

    _indeterminate: {
      bg: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      borderColor: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
      color: mode(lightText, darkText)(props),
    },

    _disabled: {
      bg: mode(`${_grayLight}.3`, `${_grayDark}.3`)(props),
      borderColor: mode(`${_grayLight}.3`, `${_grayDark}.3`)(props),
    },

    _focus: {
      boxShadow: `outline`,
    },

    _invalid: {
      borderColor: mode(`${redLight}.9`, `${redDark}.9`)(props),
    },
  };
};

const baseStyleContainer: SystemStyleObject = {
  _disabled: { cursor: "not-allowed" },
};

const baseStyleLabel: SystemStyleObject = {
  userSelect: "none",
  _disabled: { opacity: 0.4 },
};

const baseStyleIcon: SystemStyleObject = {
  transitionProperty: "transform",
  transitionDuration: "normal",
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: baseStyleControl(props),
  label: baseStyleLabel,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    control: { h: 3, w: 3 },
    label: { fontSize: "sm" },
    icon: { fontSize: "0.45rem" },
  },
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: "md" },
    icon: { fontSize: "0.625rem" },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: "lg" },
    icon: { fontSize: "0.625rem" },
  },
};

const defaultProps = {
  size: "md",
  colorScheme: "blue",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
