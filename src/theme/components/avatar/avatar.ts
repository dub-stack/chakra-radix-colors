import { avatarAnatomy as parts } from "@chakra-ui/anatomy";
import { isDark, mode, randomColor } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { Theme, theme } from "@chakra-ui/react";

const themeSizes = theme.sizes;

const baseStyleBadge: SystemStyleFunction = (props) => {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("_gray.1", "_grayDark.1")(props),
  };
};

const baseStyleExcessLabel: SystemStyleFunction = (props) => {
  return {
    bg: mode("_gray.4", "_grayDark.4")(props),
  };
};

const baseStyleContainer: SystemStyleFunction = (props) => {
  const { name, theme } = props;
  const bg = name ? randomColor({ string: name }) : "_gray.9";
  const isBgDark = isDark(bg)(theme);

  let color = "_gray.1";
  if (!isBgDark) color = "_gray.11";

  const borderColor = mode("_gray.1", "_grayDark.1")(props);

  return {
    bg,
    color,
    borderColor,
    verticalAlign: "top",
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  badge: baseStyleBadge(props),
  excessLabel: baseStyleExcessLabel(props),
  container: baseStyleContainer(props),
});

function getSize(size: string): PartsStyleObject<typeof parts> {
  const themeSize = themeSizes[size as keyof Theme["sizes"]];
  return {
    container: {
      width: size,
      height: size,
      fontSize: `calc(${themeSize ?? size} / 2.5)`,
    },
    excessLabel: {
      width: size,
      height: size,
    },
    label: {
      fontSize: `calc(${themeSize ?? size} / 2.5)`,
      lineHeight: size !== "100%" ? themeSize ?? size : undefined,
    },
  };
}

const sizes = {
  "2xs": getSize("4"),
  xs: getSize("6"),
  sm: getSize("8"),
  md: getSize("12"),
  lg: getSize("16"),
  xl: getSize("24"),
  "2xl": getSize("32"),
  full: getSize("100%"),
};

const defaultProps = {
  size: "md",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
