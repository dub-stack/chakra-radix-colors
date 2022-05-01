<p align="center">
  <a href="https://www.radix-ui.com/colors">
    <div height="50px" width="50px">
    ![radix-ui logo](doc/images/radix-ui-logo_light.png#gh-light-mode-only)
    ![radix-ui logo](doc/images/radix-ui-logo_dark.png#gh-dark-mode-only)
    </div>
  </a>
  <img src="doc/images/plus.png" alt="plus icon" height="50px" w="50px" />
  <a href="https://www.chakra-ui.com">
    <img src="doc/images/chakra-ui-logo.png" alt="chakra-ui logo" height="50px" width="50px" />
    </a>
</div>

<h1 align="center">chakra-radix-colors</h1>

<br/>
<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License MIT" />
  <img src="https://img.shields.io/bundlephobia/minzip/chakra-radix-colors" alt="Minzipped size" />
  <img src="https://img.shields.io/jsdelivr/npm/hm/chakra-radix-colorslabel=downloads" alt="Downloads" />
</div>
<br/>

`chakra-radix-colors` provides radix-ui color palettes, automatic dark mode, and acessible colors to chakra-ui applications.

## About

Chakra-ui provides all of the building blocks needed for creating beautiful and accessible UIs, however when creating custom components or styling your elements there is not a way to have automatic dark mode support. Radix-ui provides a colors package that supports automatic dark mode, has great accessibility, and provides excellent guidance for using their color palette. This package helps glue some of my favorite features of Chakra and Radix together.

## Installation

```bash
npm install @dub-stack/chakra-radix-colors @radix-ui/colors
```

## Quick Start

1. To get started without customizing the theme simply setup your providers as you would in a Chakra application. For instructions on setting up a `ChakraProvider`, see the [chakra docs](https://chakra-ui.com/docs/getting-started#set-up-provider).

   Now, we will add our custom theme:

   ```ts
   // Pass our theme prop to the `ChakraProvider`
   import { theme } from "chakra-radix-colors";

   function App({ Component }) {
     return (
       <ChakraProvider theme={theme}>
         <Component />
       </ChakraProvider>
     );
   }
   ```

   This custom theme defines the 1 - 12 color palette's that Radix-ui provides, this also overrides all of the component styles to use the Radix-ui colors.

2. We are now ready to use the Radix-ui colors with automatic dark mode support in our app. Try the example below!

   ```ts
   import { Box, HStack, Button, Badge, useColorMode } from "@chakra-ui/react";
   import { useThemedColor } from "chakra-radix-colors";

   const MyComponent = () => {
     const { toggleColorMode } = useColorMode();
     const c = useThemedColor();

     return (
       <Box bg={c("slate.1")} w="full" h="full">
         // Toggle the mode to see automatic themeing in action!
         <Button onClick={toggleColorMode}>Switch Theme</Button>
         <HStack>
           // We can use the light and dark colors ...
           <Box bg={c("blue.4")} h="12" w="12" />
           <Box bg={c("blueDark.4")} h="12" w="12" />
           // There are alpha colors ...
           <Box bg={c("pinkA.4")} h="12" w="12" />
           <Box bg={c("pinkDarkA.4")} h="12" w="12" />
           // Use color schemes with our radix colors too
           <Badge colorScheme="grass">Grass</Badge>
           <Badge colorScheme="mint">Grass</Badge>
         </HStack>
       </Box>
     );
   };
   ```

3. While developing your application check out https://radix-ui.com/colors to see all of the palettes, and a guide on how to use the colors. Following the colors guide will help achieve consistent coloring, and helps to build an accessible web with compliant contrast ratios.

## Customize the Theme

All of the theme customization options that Chakra provides are still available to you with this package, you can add more colors, filter out colors you don't use, override components, and customize the theme much as you like. Since this package is just a custom theme ontop of the chakra default theme, we can pick and choose the overrides we want. See Chakra's [customizing theme](https://chakra-ui.com/docs/theming/customize-theme) documentation on how to set up a custom theme.

```ts
// 1. Import `extendTheme` and `overrides`
import { extendTheme } from "@chakra-ui/react";
import { overrides } from "chakra-radix-colors";

// 2. Create `colors` object
const colors = {
  // Add all of the radix colors we want to keep
  ...overrides.colors,

  // If we want to use a different gray as the default
  // instead of `slate`, we can specify it here
  defaultgray: {
    ...overrides.colors.olive,
  },
  defaultgrayDark: {
    ...overrides.colors.oliveDark,
  },
  defaultgrayA: {
    ...overrides.colors.oliveA,
  },
  defaultgrayDarkA: {
    ...overrides.colors.oliveDarkA,
  },
};

// 3. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors,
  components: {
    // here we can specify the component overrides, do you want
    // another variant or different styling for your button, badge, etc?
    // Specify component overrides here, see chakra docs for more info:
    // https://chakra-ui.com/docs/theming/component-style
    ...overrides.components,
  },
  styles: {
    // to overwrite the global styles, you must copy in the styles from this
    // package to have the correct grays for your components, and then modify
    // how you like
    global: overrides.styles.global,
  },
  config: overrides.config,
});

// 4. Remove the default chakra-ui colors, if we don't do this all of the
// chakra colors will still be defined
theme.colors = colors;
```
