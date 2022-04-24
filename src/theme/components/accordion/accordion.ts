import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
  mode,
} from "@chakra-ui/theme-tools";

const baseStyleContainer: SystemStyleObject = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px",
  },
};

const baseStyleButton: SystemStyleFunction = (props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "1rem",
    _focus: {
      boxShadow: "outline",
    },
    _hover: {
      bg: mode("blackA.3", "whiteA.3")(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    px: 4,
    py: 2,
  };
};

const baseStylePanel: SystemStyleObject = {
  pt: 2,
  px: 4,
  pb: 5,
};

const baseStyleIcon: SystemStyleObject = {
  fontSize: "1.25em",
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: {},
  container: baseStyleContainer,
  button: baseStyleButton(props),
  panel: baseStylePanel,
  icon: baseStyleIcon,
});

export default {
  parts: parts.keys,
  baseStyle,
};
