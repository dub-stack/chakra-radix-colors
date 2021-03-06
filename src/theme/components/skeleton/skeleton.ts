import { keyframes } from "@chakra-ui/system";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  const defaultStartColor = mode(`${_gray}.3`, `${_grayDark}.3`)(props);
  const defaultEndColor = mode(`${_gray}.9`, `${_grayDark}.9`)(props);

  const {
    startColor = defaultStartColor,
    endColor = defaultEndColor,
    speed,
  } = props;

  const start = getColor(theme, startColor);
  const end = getColor(theme, endColor);

  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: `${speed}s linear infinite alternate ${fade(start, end)}`,
  };
};

export default {
  baseStyle,
};
