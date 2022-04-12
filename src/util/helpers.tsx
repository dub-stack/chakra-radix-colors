import type { IColorScale, RadixColorKeyType } from "theme/foundations/colors";
import { useColorMode } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

/**
 * Transforms a @radix-ui/colors palette from specifying a literal color,
 * (like `#ffffff`) to specify a chakra generated css variable. This is
 * useful when you need to alias a @radix-ui/colors palette to another name,
 * wihout duplicating the palette.
 *

 * This is used by the package when defining the default gray `_gray*` as shown
 * in the example below.
 *
 * @example
 * {
 *   _gray: chakraTokensFromPalette("slate")
 *   _grayA: chakraTokensFromPalette("slateA")
 *   _grayDark: chakraTokensFromPalette("slateDark")
 *   _grayDarkA: chakraTokensFromPalette("slateDarkA")
 * }
 * 
 * Without:  `_gray.3` -> `hsl(0 0% 95.1%)`
 * With:     `_gray.3` -> `var(--chakra-colors-slate-3)`
 *
 *
 * @param paletteName The name of the @radix-ui/colors palette.
 * @returns The css-variable-aliases color scale.
 */
export function chakraTokensFromPalette(paletteName: RadixColorKeyType) {
  const colorScale: IColorScale = {
    1: `var(--chakra-colors-${paletteName}-1)`,
    2: `var(--chakra-colors-${paletteName}-2)`,
    3: `var(--chakra-colors-${paletteName}-3)`,
    4: `var(--chakra-colors-${paletteName}-4)`,
    5: `var(--chakra-colors-${paletteName}-5)`,
    6: `var(--chakra-colors-${paletteName}-6)`,
    7: `var(--chakra-colors-${paletteName}-7)`,
    8: `var(--chakra-colors-${paletteName}-8)`,
    9: `var(--chakra-colors-${paletteName}-9)`,
    10: `var(--chakra-colors-${paletteName}-10)`,
    11: `var(--chakra-colors-${paletteName}-11)`,
    12: `var(--chakra-colors-${paletteName}-12)`,
  };

  return colorScale;
}

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
  const baseSearch = base.match(/^[a-z]+/);
  console.log(baseSearch);
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
  const baseSearch = palette.match(/^[a-z]+/)!;

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";

  // get light and dark base
  const lightBase = `${newBase}${isDark ? "Dark" : ""}${A}`;
  const darkBase = `${newBase}${isDark ? "" : "Dark"}${A}`;

  return [`${lightBase}`, `${darkBase}`];
}

/**
 * Returns a [lightColor, darkColor] tuple with the light and
 * dark colors of the input color.
 *
 * @param color A color string from theme. Ex: "teal"
 * @param theme The theme with radix-ui color palettes.
 * @returns A color tuple of the resolved [lightColor, darkColor].
 * @example
 *   const [original, flipped] = getResolvedColorPair("amberA.7", theme);
 *   // returns ["hsl(36 99.9% 46.2% / 0.612)", "hsl(34 99.6% 52.9% / 0.331)"]
 */
export function getResolvedColorPair(color: string, theme: Dict<any>) {
  const [base, index] = color.split(".");
  const [isDark, isA] = [base.includes("Dark"), base.includes("A")];

  // search for the base, ex: "blue" from color "blueDarkA"
  // we can search for contiguous lowercase to find this
  const baseSearch = base.match(/^[a-z]+/);
  if (!baseSearch) return [color, color];

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";

  // get light and dark base
  const lightBase = `${newBase}${isDark ? "Dark" : ""}${A}`;
  const darkBase = `${newBase}${isDark ? "" : "Dark"}${A}`;

  if (theme.colors[newBase] && theme.colors[newBase][index])
    return [theme.colors[lightBase][index], theme.colors[darkBase][index]];
  else return [color, color];
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
  const [lightPalette, darkPalette] = getBaseColorPair(palette, theme);

  // get the lightText & darkText
  const isDark = palette.includes("Dark");
  const [lightText, darkText] = isDark
    ? ["_gray.12", "_gray.1"]
    : ["_gray.1", "_gray.12"];

  // determine if it is a bright color
  const isBright = Object.values(BrightColors).some((brightColor) =>
    palette.startsWith(brightColor)
  );

  return { lightPalette, darkPalette, isDark, lightText, darkText, isBright };
}
