import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "util/helpers";

const baseStyleText: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: redLight, dark: redDark } = getColorInfo("red", theme);

  return {
    color: mode(`${redLight}.9`, `${redDark}.9`)(props),
    mt: 2,
    fontSize: "sm",
    lineHeight: "normal",
  };
};

const baseStyleIcon: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: redLight, dark: redDark } = getColorInfo("red", theme);

  return {
    marginEnd: "0.5em",
    color: mode(`${redLight}.9`, `${redDark}.9`)(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  text: baseStyleText(props),
  icon: baseStyleIcon(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
