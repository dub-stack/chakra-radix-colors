import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
};

const size: Record<string, SystemStyleObject> = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md",
  },

  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md",
  },

  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm",
  },

  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm",
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
  xs: {
    field: size.xs,
    addon: size.xs,
  },
};

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec, theme } = props;
  const { light: blue, dark: blueDark } = getColorInfo("blue", theme);
  const { light: red, dark: redDark } = getColorInfo("red", theme);

  return {
    focusBorderColor: fc || mode(`${blue}.9`, `${blueDark}.9`)(props),
    errorBorderColor: ec || mode(`${red}.9`, `${redDark}.9`)(props),
  };
}

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode(`${_gray}.7`, `${_grayDark}.7`)(props),
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        borderColor: mode(`${_gray}.6`, `${_grayDark}.6`)(props),
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
      },
    },
    addon: {
      border: "1px solid",
      borderColor: mode(`${_gray}.6`, `${_grayDark}.6`)(props),
      bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
    },
  };
};

const variantFilled: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
      _hover: {
        bg: mode(`${_gray}.4`, `${_grayDark}.4`)(props),
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
      },
      _focus: {
        bg: "transparent",
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
    },
  };
};

const variantFlushed: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`,
      },
      _focus: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`,
      },
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
    },
  };
};

const variantUnstyled: PartsStyleObject<typeof parts> = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto",
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto",
  },
};

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
};

const defaultProps = {
  size: "md",
  variant: "outline",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
