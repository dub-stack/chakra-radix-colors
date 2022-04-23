import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  return {
    borderRadius: "md",
    fontWeight: "semibold",
    _focus: {
      boxShadow: "outline",
      padding: "1rem",
      position: "fixed",
      top: "1.5rem",
      insetStart: "1.5rem",
      bg: mode(`${lightGray}.1`, `${darkGray}.1`)(props),
    },
  };
};

export default {
  baseStyle,
};
