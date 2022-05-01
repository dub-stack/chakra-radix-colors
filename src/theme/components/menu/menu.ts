import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const baseStyleList: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    bg: mode(`${_gray}.1`, `${_grayDark}.1`)(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
  };
};

const baseStyleItem: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
    },
    _active: {
      bg: mode(`${_gray}.4`, `${_grayDark}.4`)(props),
    },
    _expanded: {
      bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  };
};

const baseStyleGroupTitle: SystemStyleObject = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
};

const baseStyleCommand: SystemStyleObject = {
  opacity: 0.6,
};

const baseStyleDivider: SystemStyleObject = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6,
};

const baseStyleButton: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "normal",
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  button: baseStyleButton,
  list: baseStyleList(props),
  item: baseStyleItem(props),
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider,
});

export default {
  parts: parts.keys,
  baseStyle,
};
