import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    borderRadius: "md",
    fontWeight: "semibold",
    _focus: {
      boxShadow: "outline",
      padding: "1rem",
      position: "fixed",
      top: "1.5rem",
      insetStart: "1.5rem",
      bg: mode(`${_gray}.1`, `${_grayDark}.1`)(props),
    },
  };
};

export default {
  baseStyle,
};
