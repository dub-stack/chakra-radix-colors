import { useColorMode } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

/**
 * Accepts a colorMode ("light" | "dark") and returns a function that accepts a color ("red.4").
 * This color is turned into the opposite-mode value when mode is turned to "dark" from "light"
 * and vise-versa.
 *
 * @param mode "light" | "dark"
 * @returns Function that accepts string of a color and returns the themed
 * color.
 * @example
 *   getThemedColor("light")("blue.4") // "blue.4";
 *   getThemedColor("dark")("blueA.5") // "blueDarkA.5"
 */
export const getThemedColor = (colorMode: string) => (color: string) => {
  const [base, scaleIndex] = color.split(".");
  const [isDark, isA] = [base.includes("Dark"), base.includes("A")];

  // ensure the scaleIndex is not undefined and is within the ColorScale range
  if (!scaleIndex) return color;
  if (parseInt(scaleIndex) > 12 || parseInt(scaleIndex) < 1) return color;

  // search for the base, ex: "blue" from color "blueDarkA"
  // we can search for contiguous lowercase to find this
  const baseSearch = base.match(/^_?[a-z]+/);
  if (!baseSearch) return color;

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";
  const Dark =
    colorMode === "light" ? (isDark ? "Dark" : "") : isDark ? "" : "Dark";

  return `${newBase}${Dark}${A}.${scaleIndex}`;
};

/**
 * Hook that returns a function, (color: string) => themedColor.
 * Where the themedColor of the function returned will change with the color mode.
 *
 * @returns Color mode adaptive color function.
 * @example
 *   const c = useThemedColor();
 *   c("blue.4") // blue.4 when light; blueDark.4 when dark
 */
export function useThemedColor() {
  const { colorMode } = useColorMode();
  const mode = colorMode === "dark" ? "dark" : "light";

  return getThemedColor(mode);
}

/**
 * Returns a [lightBaseColor, darkBaseColor] tuple with the light and
 * dark colors of the input base color.
 *
 * @param color A base color string from theme. Ex: "teal"
 * @param theme The theme with radix-ui color palettes.
 * @returns A color tuple of the [lightBaseColor, darkBaseColor].
 * @example
 *   const [original, flipped] = getBaseColorPair("red", theme);
 *   // returns ["red", "redDark"]
 */
export function getBaseColorPair(palette: string, theme: Dict<any>) {
  const [isDark, isA] = [palette.includes("Dark"), palette.includes("A")];

  // make sure the passed color matches a theme color exactly
  if (!theme.colors[palette]) return [palette, palette];

  // search for the base ex: "blue" from color "blueDarkA"
  // we can search for contiguous lowercase to find this
  const baseSearch = palette.match(/^_?[a-z]+/)!;

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";

  // get light and dark base
  const lightBase = `${newBase}${isDark ? "Dark" : ""}${A}`;
  const darkBase = `${newBase}${isDark ? "" : "Dark"}${A}`;

  return [`${lightBase}`, `${darkBase}`];
}

// Bright colors are meant to be used with different text color. To see the list of
// bright colors visit: https://www.radix-ui.com/docs/colors/palette-composition/the-scales#bright-colors
export const BrightColors = {
  Sky: "sky",
  Mint: "mint",
  Lime: "lime",
  Yellow: "yellow",
  Amber: "amber",
} as const;

export function getColorInfo(palette: string, theme: Dict<any>) {
  const [light, dark] = getBaseColorPair(palette, theme);

  // get the lightText & darkText
  const isDark = palette.includes("Dark");

  // determine if it is a bright color
  const isBright = Object.values(BrightColors).some((brightColor) =>
    palette.startsWith(brightColor)
  );

  // determine if is an alpha color
  const isA = palette.includes("A");

  return {
    light,
    dark,
    isDark,
    isBright,
    isA,
  };
}
