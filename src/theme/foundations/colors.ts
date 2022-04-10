import * as radixColors from "@radix-ui/colors";
import { chakraTokensFromPalette } from "util/helpers";

// create the types for radix colors
export interface IColorScale {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
}
export type RadixColorKeyType = keyof typeof radixColors;
export type RadixColorsType = Record<RadixColorKeyType, IColorScale>;

// Extract and create the radixColors into a RadixColorsType object.
// This "colors" object will be compliant with the @chakra-ui/react config format
export const colors = Object.fromEntries(
  Object.entries(radixColors).map(([key, value]) => [
    key,
    Object.fromEntries(
      Object.entries(value).map(([colorKey, colorValue]) => [
        colorKey.match(/[0-9]+$/)![0],
        colorValue,
      ])
    ),
  ])
) as unknown as RadixColorsType;

// override the default styles
export default {
  // add all radix-ui color scales to the chakra-ui overrides
  ...colors,

  // select a default grayscale from the radix-ui colors as chakra-ui
  // has only one grayscale. Radix-ui provides many grayscales and we need
  // a default for all component overrides
  _gray: chakraTokensFromPalette("slate"),
  _grayA: chakraTokensFromPalette("slateA"),
  _grayDark: chakraTokensFromPalette("slateDark"),
  _grayDarkA: chakraTokensFromPalette("slateDarkA"),
};
