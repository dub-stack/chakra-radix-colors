import { tableAnatomy as parts } from "@chakra-ui/anatomy";

import { mode } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const baseStyle: PartsStyleObject<typeof parts> = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full",
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start",
  },
  td: {
    textAlign: "start",
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium",
  },
};

const numericStyles: SystemStyleObject = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

const variantSimple: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);
  const { light, dark, isDark } = getColorInfo(c, theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    th: {
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
      borderBottom: "1px",
      borderColor: mode(`${light}.6`, `${dark}.6`)(props),
      ...numericStyles,
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${light}.6`, `${dark}.6`)(props),
      color: mode(`${_gray}.12`, `${_grayDark}.12`)(props),
      ...numericStyles,
    },
    caption: {
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
};

const variantStripe: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);
  const { light, dark, isDark } = getColorInfo(c, theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    th: {
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
      borderBottom: "1px",
      borderColor: mode(`${light}.3`, `${dark}.3`)(props),
      ...numericStyles,
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${light}.3`, `${dark}.3`)(props),
      color: mode(`${_gray}.12`, `${_grayDark}.12`)(props),
      ...numericStyles,
    },
    caption: {
      color: mode(`${_gray}.11`, `${_grayDark}.11`)(props),
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${light}.3`, `${dark}.3`)(props),
          },
          td: {
            background: mode(`${light}.3`, `${dark}.3`)(props),
          },
        },
      },
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
};

const variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: {},
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4",
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs",
    },
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs",
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5",
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm",
    },
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm",
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6",
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md",
    },
  },
};

const defaultProps = {
  variant: "simple",
  size: "md",
  colorScheme: "_gray",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
