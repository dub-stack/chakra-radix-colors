import { progressAnatomy as parts } from "@chakra-ui/anatomy";
import {
  generateStripe,
  getColor,
  mode,
  PartsStyleFunction,
  PartsStyleObject,
  StyleFunctionProps,
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

function filledStyle(props: StyleFunctionProps): SystemStyleObject {
  const { colorScheme: c, theme, isIndeterminate, hasStripe } = props;
  const { light, dark, isDark, isBright } = getColorInfo(c, theme);

  let stripeStyle = isDark
    ? mode(generateStripe("1rem", "rgba(0,0,0,0.1)"), generateStripe())(props)
    : mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  if (isBright) stripeStyle = generateStripe("1rem", "rgba(0,0,0,0.1)");

  const bgColor = mode(`${light}.9`, `${dark}.9`)(props);

  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(theme, bgColor)} 50%,
    transparent 100%
  )`;

  const addStripe = !isIndeterminate && hasStripe;

  return {
    ...(addStripe && stripeStyle),
    ...(isIndeterminate ? { bgImage: gradient } : { bgColor }),
  };
}

const baseStyleLabel: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { isBright } = getColorInfo(c, theme);

  let color = "_gray.1";
  if (isBright) color = "_gray.12";

  return {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color,
  };
};

const baseStyleTrack: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  if (isDark) [_grayDark, _gray] = [_gray, _grayDark];

  return {
    bg: mode(`${_gray}A.3`, `${_grayDark}A.3`)(props),
  };
};

const baseStyleFilledTrack: SystemStyleFunction = (props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  label: baseStyleLabel(props),
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props),
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  xs: {
    track: { h: "0.25rem" },
  },
  sm: {
    track: { h: "0.5rem" },
  },
  md: {
    track: { h: "0.75rem" },
  },
  lg: {
    track: { h: "1rem" },
  },
};

const defaultProps = {
  size: "md",
  colorScheme: "blue",
};

export default {
  parts: parts.keys,
  sizes,
  baseStyle,
  defaultProps,
};
