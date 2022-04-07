import type { IColorScale, RadixColorKeyType } from "theme/colors";
import { useColorMode } from "@chakra-ui/react";

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
  const baseSearch = base.match(/[a-z]+/);
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
