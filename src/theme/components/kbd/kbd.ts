import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { lightPalette: grayLight, darkPalette: grayDark } = getColorInfo(
    "gray",
    theme
  );

  return {
    bg: mode(`${grayLight}.3`, `${grayDark}.3`)(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  };
};

export default {
  baseStyle,
};
