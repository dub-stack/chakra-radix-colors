import { getColor, mode, transparentize } from "@chakra-ui/theme-tools";
import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyle: SystemStyleObject = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { lightPalette, darkPalette, isDark, isBright } = getColorInfo(
    c,
    theme
  );

  // when custom text colors, we must flip them here instead of with the
  // return from getColorInfo
  let [lightText, darkText] = ["_gray.1", "_grayDarkA.12"];
  if (isDark) [lightText, darkText] = [darkText, lightText];
  if (isBright) [lightText, darkText] = ["_gray.12", "_gray.12"];

  return {
    bg: mode(`${lightPalette}.9`, `${darkPalette}.9`)(props),
    color: mode(lightText, darkText)(props),
  };
};

const variantSubtle: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { lightPalette, darkPalette, isDark } = getColorInfo(c, theme);
  let { lightPalette: grayLight, darkPalette: grayDark } = getColorInfo(
    c,
    theme
  );

  // when custom text colors, we must flip them here instead of with the
  // return from getColorInfo
  let [lightText, darkText] = ["_grayA.11", "_grayDarkA.11"];
  if (isDark) [lightText, darkText] = [darkText, lightText];
  if (c.startsWith("_gray"))
    [lightText, darkText] = [`${grayLight}.12`, `${grayDark}.12`];

  return {
    bg: mode(`${lightPalette}.4`, `${darkPalette}.4`)(props),
    color: mode(lightText, darkText)(props),
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { lightPalette, darkPalette, isDark } = getColorInfo(c, theme);

  // when custom text colors, we must flip them here instead of with the
  // return from getColorInfo
  let [lightText, darkText] = [`${lightPalette}.9`, `${darkPalette}.9`];

  // get the color
  const [lightColor] = getColor(theme, lightText);
  const [darkColor] = getColor(theme, darkText);
  const color = mode(lightColor, darkColor)(props);

  return {
    color,
    boxShadow: `inset 0 0 0px 1px ${color}`,
  };
};

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: "subtle",
  colorScheme: "_gray",
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
