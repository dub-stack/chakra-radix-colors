import { getColor, mode } from "@chakra-ui/theme-tools";
import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const baseStyle: SystemStyleObject = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark, isBright, isDark } = getColorInfo(c, theme);
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  let [lightText, darkText] = [`${_gray}.1`, `${_grayDark}.1`];
  if (isBright) [lightText, darkText] = [darkText, darkText];
  if (isDark) [lightText, darkText] = [darkText, lightText];

  return {
    bg: mode(`${light}.9`, `${dark}.9`)(props),
    color: mode(lightText, darkText)(props),
  };
};

const variantSubtle: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo(c, theme);

  // when custom text colors, we must flip them here instead of with the
  // return from getColorInfo
  let [lightText, darkText] = [`${light}.11`, `${dark}.11`];
  if (c.startsWith("_gray"))
    [lightText, darkText] = [`${_gray}.12`, `${_grayDark}.12`];

  return {
    bg: mode(`${light}.4`, `${dark}.4`)(props),
    color: mode(lightText, darkText)(props),
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  let { light, dark, isDark } = getColorInfo(c, theme);

  // when custom text colors, we must flip them here instead of with the
  // return from getColorInfo
  let [lightText, darkText] = [`${light}.9`, `${dark}.9`];
  if (isDark) [lightText, darkText] = [darkText, lightText];

  // get the color
  const lightColor = getColor(theme, lightText);
  const darkColor = getColor(theme, darkText);
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
