import { mode, cssVar, SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const $bg = cssVar("tooltip-bg");
const $arrowBg = cssVar("popper-arrow-bg");

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  const bg = mode(`${_grayDark}.2`, `${_gray}.2`)(props);
  return {
    [$bg.variable]: `colors.${bg}`,
    px: "8px",
    py: "2px",
    bg: [$bg.reference],
    [$arrowBg.variable]: [$bg.reference],
    color: mode(`${_gray}.1`, `${_grayDark}.1`)(props),
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
