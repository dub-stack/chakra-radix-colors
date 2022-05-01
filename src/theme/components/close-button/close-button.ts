import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { cssVar, mode } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

const $size = cssVar("close-button-size");

const baseStyle: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light, dark } = getColorInfo("_gray", theme);

  const hoverBg = mode(`${light}A.3`, `${dark}A.3`)(props);
  const activeBg = mode(`${light}A.4`, `${dark}A.4`)(props);

  return {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _hover: { bg: hoverBg },
    _active: { bg: activeBg },
    _focus: {
      boxShadow: "outline",
    },
  };
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    [$size.variable]: "40px",
    fontSize: "16px",
  },
  md: {
    [$size.variable]: "32px",
    fontSize: "12px",
  },
  sm: {
    [$size.variable]: "24px",
    fontSize: "10px",
  },
};

const defaultProps = {
  size: "md",
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
