import { mode, cssVar, SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const $bg = cssVar("tooltip-bg");
const $arrowBg = cssVar("popper-arrow-bg");

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  const bg = mode(`${darkGray}.2`, `${lightGray}.2`)(props);
  return {
    [$bg.variable]: `colors.${bg}`,
    px: "8px",
    py: "2px",
    bg: [$bg.reference],
    [$arrowBg.variable]: [$bg.reference],
    color: mode(`${lightGray}.1`, `${darkGray}.1`)(props),
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "320px",
    zIndex: "tooltip",
  };
};

export default {
  baseStyle,
};
