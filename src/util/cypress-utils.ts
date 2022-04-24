import { getColor } from "@chakra-ui/theme-tools";
import theme from "theme";
import { hsl } from "color-convert";

/**
 * Turns an HSL string into an array of the h, s, l values.
 *
 * @example normalizeHslString("hsl(360, 97.9%, 94.8%)") -> [360, 97.9, 94.8]
 *
 * @param hsl An hsl string
 * @returns
 */
function normalizeHslString(hsl: string) {
  let [h, s, l] = hsl
    .replace(/[^\d,.]/g, "")
    .split(",")
    .map((item) => parseFloat(item));

  return [h, s, l];
}

export function getRgbFromThemeColor(color: string) {
  const c = getColor(theme, color);
  let [h, s, l] = normalizeHslString(c);
  let [r, g, b] = hsl.rgb([h, s, l]);
  return `rgb(${r}, ${g}, ${b})`;
}
