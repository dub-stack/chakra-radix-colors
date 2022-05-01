import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  StyleFunctionProps,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode, orient } from "@chakra-ui/theme-tools";
import { getColorInfo } from "../../../util/helpers";

function thumbOrientation(props: StyleFunctionProps): SystemStyleObject {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`,
        _disabled: {
          transform: "translateX(-50%)",
        },
      },
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`,
        _disabled: {
          transform: "translateY(-50%)",
        },
      },
    },
  });
}

const baseStyleContainer: SystemStyleFunction = (props) => {
  const { orientation } = props;

  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "not-allowed",
      pointerEvents: "auto",
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" },
    }),
  };
};

const baseStyleTrack: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  if (isDark) [_gray, _grayDark] = [_grayDark, _gray];

  return {
    overflow: "hidden",
    borderRadius: "sm",
    bg: mode(`${_gray}.3`, `${_grayDark}.3`)(props),
    _disabled: {
      bg: mode(`${_gray}.4`, `${_grayDark}.4`)(props),
    },
  };
};

const baseStyleThumb: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { isDark } = getColorInfo(c, theme);
  let { light: _gray, dark: _grayDark } = getColorInfo("_gray", theme);

  let [bg, _disabledBg] = [
    mode(`${_gray}.1`, `${_grayDark}.4`)(props),
    mode(`${_gray}.3`, `${_grayDark}.5`)(props),
  ];
  if (isDark)
    [bg, _disabledBg] = [
      mode(`${_grayDark}.4`, `${_gray}.1`)(props),
      mode(`${_grayDark}.5`, `${_gray}.3`)(props),
    ];

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg,
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focus: { boxShadow: "outline" },
    _disabled: {
      bg: _disabledBg,
    },
    ...thumbOrientation(props),
  };
};

const baseStyleFilledTrack: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const { light, dark } = getColorInfo(c, theme);

  return {
    width: "inherit",
    height: "inherit",
    bg: mode(`${light}.9`, `${dark}.9`)(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: baseStyleContainer(props),
  track: baseStyleTrack(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack(props),
});

const sizeLg: PartsStyleFunction<typeof parts> = (props) => {
  return {
    thumb: { w: "16px", h: "16px" },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: "4px" },
      vertical: { w: "4px" },
    }),
  };
};

const sizeMd: PartsStyleFunction<typeof parts> = (props) => {
  return {
    thumb: { w: "14px", h: "14px" },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: "4px" },
      vertical: { w: "4px" },
    }),
  };
};

const sizeSm: PartsStyleFunction<typeof parts> = (props) => {
  return {
    thumb: { w: "10px", h: "10px" },
    track: orient({
      orientation: props.orientation,
      horizontal: { h: "2px" },
      vertical: { w: "2px" },
    }),
  };
};

const sizes = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm,
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
