import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleInterpolation,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyleRoot: SystemStyleFunction = (props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block",
  };
};

const baseStyleTab: SystemStyleFunction = (props) => {
  const { isFitted } = props;

  return {
    flex: isFitted ? 1 : undefined,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: {
      zIndex: 1,
      boxShadow: "outline",
    },
  };
};

const baseStyleTablist: SystemStyleFunction = (props) => {
  const { align = "start", orientation } = props;

  const alignments: Record<string, string> = {
    end: "flex-end",
    center: "center",
    start: "flex-start",
  };

  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row",
  };
};

const baseStyleTabpanel: SystemStyleObject = {
  p: 4,
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm",
    },
  },
  md: {
    tab: {
      fontSize: "md",
      py: 2,
      px: 4,
    },
  },
  lg: {
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4,
    },
  },
};

const variantLine: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, orientation, theme } = props;
  const isVertical = orientation === "vertical";
  const borderProp =
    orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  const { light, dark, isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: mode(`${_gray}.6`, `${_grayDark}.6`)(props),
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
      _selected: {
        color: mode(`${light}.11`, `${dark}.11`)(props),
        borderColor: "currentColor",
      },
      _active: {
        bg: mode(`${_gray}.4`, `${_grayDark}.4`)(props),
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  };
};

const variantEnclosed: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark, isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
      mb: "-1px",
      _selected: {
        color: mode(`${light}.11`, `${dark}.11`)(props),
        borderColor: "inherit",
        borderBottomColor: mode(`${_gray}.1`, `${_grayDark}.1`)(props),
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: mode(`${_gray}.6`, `${_grayDark}.6`)(props),
    },
  };
};

const variantEnclosedColored: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark, isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
      bg: mode(`${_gray}.2`, `${_grayDark}.2`)(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px",
      },
      _selected: {
        bg: mode(`${light}.2`, `${dark}.2`)(props),
        color: mode(`${light}.11`, `${dark}.11`)(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.4",
      },
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: mode(`${_gray}.6`, `${_grayDark}.6`)(props),
    },
  };
};

const variantSoftRounded: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark, isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  const color = mode(`${light}.11`, `${dark}.11`)(props);
  const bg = mode(`${light}.4`, `${dark}.4`)(props);

  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
      _selected: {
        color: getColor(theme, color),
        bg: getColor(theme, bg),
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.4",
      },
    },
  };
};

const variantSolidRounded: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark, isBright } = getColorInfo(c, theme);

  let color = `_gray.1`;
  if (isBright) color = `_gray.12`;

  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode(`${light}.11`, `${dark}.11`)(props),
      _selected: {
        color,
        bg: mode(`${light}.9`, `${dark}.9`)(props),
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.4",
      },
    },
  };
};

const variantUnstyled: PartsStyleObject<typeof parts> = {};

const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled,
};

const defaultProps = {
  size: "md",
  variant: "line",
  colorScheme: "blue",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
