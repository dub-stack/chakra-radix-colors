import { keyframes } from "@chakra-ui/system";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const fade = (startColor: string, endColor: string) =>
  keyframes({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
  });

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { lightPalette: lightGray, darkPalette: darkGray } = getColorInfo(
    "gray",
    theme
  );

  const defaultStartColor = mode(`${lightGray}.3`, `${darkGray}.3`)(props);
  const defaultEndColor = mode(`${lightGray}.9`, `${darkGray}.9`)(props);

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
