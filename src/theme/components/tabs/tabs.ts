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
  const { lightPalette, darkPalette } = getColorInfo(c, theme);
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit",
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        color: mode(`${lightPalette}.11`, `${darkPalette}.11`)(props),
        borderColor: "currentColor",
      },
      _active: {
        bg: mode(`${lightGray}.4`, `${darkGray}.4`)(props),
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
  const { lightPalette, darkPalette } = getColorInfo(c, theme);
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(`${lightPalette}.11`, `${darkPalette}.11`)(props),
        borderColor: "inherit",
        borderBottomColor: mode(`${lightGray}.1`, `${darkGray}.1`)(props),
      },
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit",
    },
  };
};

const variantEnclosedColored: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { lightPalette, darkPalette } = getColorInfo(c, theme);
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode(`${lightGray}.2`, `${darkGray}.2`)(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px",
      },
      _selected: {
        bg: mode(`${lightPalette}.1`, `${darkPalette}.1`)(props),
        color: mode(`${lightPalette}.11`, `${darkPalette}.11`)(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent",
      },
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit",
    },
  };
};

const variantSoftRounded: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { lightPalette, darkPalette } = getColorInfo(c, theme);
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  const color = mode(`${lightPalette}.11`, `${darkPalette}.11`)(props);
  const bg = mode(`${lightPalette}.5`, `${darkPalette}.5`)(props);

  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode(`${lightGray}.11`, `${darkGray}.11`)(props),
      _selected: {
        color: getColor(theme, color),
        bg: getColor(theme, bg),
      },
    },
  };
};

const variantSolidRounded: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const { lightPalette, darkPalette } = getColorInfo(c, theme);
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode(`${lightPalette}.11`, `${darkPalette}.11`)(props),
      _selected: {
        color: mode(`${lightGray}.1`, `${darkGray}.1`)(props),
        bg: mode(`${lightPalette}.11`, `${darkPalette}.11`)(props),
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
