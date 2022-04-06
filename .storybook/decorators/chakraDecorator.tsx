import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../../src/theme";

export const chakraDecorator = (Story) => (
  <>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  </>
);
