import { extendTheme, Theme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import colors, { RadixColorsType } from "./foundations/colors";

// Component style overrides
import * as components from "./components";

// create the theme
const theme = extendTheme({
  colors,
  components,
  styles,
}) as unknown as Omit<Theme, "colors"> & { colors: RadixColorsType };
theme.colors = colors; // remove the default @chakra-ui colors

// export the theme
export default theme;
