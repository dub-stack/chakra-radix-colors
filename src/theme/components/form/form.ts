import { formAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const baseStyleRequiredIndicator: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: redLight, dark: redDark } = getColorInfo("red", theme);
  return {
    marginStart: 1,
    color: mode(`${redLight}.9`, `${redDark}.9`)(props),
  };
};

const baseStyleHelperText: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light, dark } = getColorInfo("_gray", theme);

  return {
    mt: 2,
    color: mode(`${light}.9`, `${dark}.9`)(props),
    lineHeight: "normal",
    fontSize: "sm",
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: { width: "100%", position: "relative" },
  requiredIndicator: baseStyleRequiredIndicator(props),
  helperText: baseStyleHelperText(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
