import { extendTheme, Theme } from "@chakra-ui/react";
import { overrides as colorOverrides, RadixColorsType } from "./colors";

// export the theme
export const theme = extendTheme({ ...colorOverrides }) as unknown as Omit<
  Theme,
  "colors"
> & { colors: RadixColorsType };
theme.colors = colorOverrides.colors; // remove the default @chakra-ui colors
