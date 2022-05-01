import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const baseStyleControl: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { light, dark, isBright, isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);
  let { light: red, dark: redDark } = getColorInfo("red", theme);

  let [color, disabledColor] = [`${_gray}.1`, `${_gray}.9`];
  if (isBright) [color, disabledColor] = [`${_grayDark}.1`, `${_grayDark}.9`];
  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color,

    _checked: {
      bg: mode(`${light}.9`, `${dark}.9`)(props),
      borderColor: mode(`${light}.9`, `${dark}.9`)(props),
      color,

      _hover: {
        bg: mode(`${light}.10`, `${dark}.10`)(props),
        borderColor: mode(`${light}.10`, `${dark}.10`)(props),
      },

      _disabled: {
        borderColor: mode(`${_gray}.4`, `${_grayDark}.4`)(props),
        bg: mode(`${_gray}.4`, `${_grayDark}.4`)(props),
        color: disabledColor,
      },
    },

    _indeterminate: {
      bg: mode(`${light}.9`, `${dark}.9`)(props),
      borderColor: mode(`${light}.9`, `${dark}.9`)(props),
      color,
    },

    _disabled: {
      bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
      borderColor: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
    },

    _focus: {
      boxShadow: `outline`,
    },

    _invalid: {
      borderColor: mode(`${red}.9`, `${redDark}.9`)(props),
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
