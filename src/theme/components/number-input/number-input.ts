import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
import { theme } from "@chakra-ui/theme";
import Input from "../input/input";
import { getColorInfo } from "../../../util/helpers";

const { variants, defaultProps } = Input;

const $stepperWidth = cssVar("number-input-stepper-width");

const $inputPadding = cssVar("number-input-input-padding");
const inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();

const baseStyleRoot: SystemStyleObject = {
  [$stepperWidth.variable]: "24px",
  [$inputPadding.variable]: inputPaddingValue,
};

const baseStyleField: SystemStyleObject = Input.baseStyle?.field ?? {};

const baseStyleStepperGroup: SystemStyleObject = {
  width: [$stepperWidth.reference],
};

const baseStyleStepper: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  return {
    borderStart: "1px solid",
    borderStartColor: mode(`${_gray}.6`, `${_grayDark}.6`)(props),
    _active: {
      bg: mode(`${_gray}.5`, `${_grayDark}.5`)(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot,
  field: baseStyleField,
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper(props),
});

type FontSize = keyof typeof theme.fontSizes;

function getSize(size: FontSize): PartsStyleObject<typeof parts> {
  const sizeStyle = Input.sizes[size];

  const radius: Partial<Record<FontSize, string>> = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm",
  };

  const _fontSize = (sizeStyle.field?.fontSize ?? "md") as FontSize;
  const fontSize = theme.fontSizes[_fontSize];

  return {
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top",
    },
    stepper: {
      fontSize: calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size],
      },
      _last: {
        borderBottomEndRadius: radius[size],
        mt: "-1px",
        borderTopWidth: 1,
      },
    },
  };
}

const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
