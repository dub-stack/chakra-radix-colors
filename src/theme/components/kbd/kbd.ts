import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
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
