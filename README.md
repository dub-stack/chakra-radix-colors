<p align="center">
  <a href="https://www.radix-ui.com/colors">
    <img src="doc/images/radix-ui-logo_light.png" alt="radix-ui icon" height="50px" w="50px" href="#gh-light-mode-only" />
    <img src="doc/images/radix-ui-logo_dark.png" alt="radix-ui icon" height="50px" w="50px" href="#gh-dark-mode-only" />
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
  <img src="https://img.shields.io/bundlephobia/minzip/@dub-stack/chakra-radix-colors" alt="Minzipped size" />
  <img src="https://img.shields.io/jsdelivr/npm/hm/@dub-stack/chakra-radix-colorslabel=downloads" alt="Downloads" />
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
   import { theme } from "@dub-stack/chakra-radix-colors";

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

Docs on this coming soon!
