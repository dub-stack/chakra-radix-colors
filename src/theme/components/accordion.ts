import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleButton: SystemStyleObject = {
  _hover: {
    bg: "blackA.2",
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  button: baseStyleButton,
};

export default {
  parts: parts.keys,
  baseStyle,
};
