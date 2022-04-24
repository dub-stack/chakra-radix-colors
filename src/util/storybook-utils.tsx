import React, { useState } from "react";
import {
  IconButton,
  ChakraProvider,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { RiMoonFill, RiRecycleFill } from "react-icons/ri";
import theme from "../theme";

/**
 * Effectively a hook that is used to toggle the colorMode for a Provider.
 * This is needed instead of just a hook because we must place this downstream from
 * a provider.
 *
 * @param props
 * @returns
 */
const SetColorMode = (props: { colorMode: string }) => {
  const { colorMode, setColorMode } = useColorMode();
  if (colorMode !== props.colorMode) setColorMode(props.colorMode);
  return <></>;
};

/**
 * Returns a chakra provider with the new package theme.
 *
 * @param props The color mode: "light" | "dark"
 * @returns
 */
const NewDecorator: React.FC<{ colorMode: string }> = (props) => (
  <ChakraProvider theme={theme}>
    <SetColorMode colorMode={props.colorMode} />
    {props.children}
  </ChakraProvider>
);

/**
 * Returns a chakra provider with the orignal chakra-ui theme.
 *
 * @param props The color mode: "light" | "dark"
 * @returns
 */
const OldDecorator: React.FC<{ colorMode: string }> = (props) => (
  <ChakraProvider>
    <SetColorMode colorMode={props.colorMode} />
    {props.children}
  </ChakraProvider>
);

/**
 * The wrapper for all storybook components. This allows for easy visual
 * comparison between the old chakra theme, and the new package theme.
 *
 * @param props The components for the new/old providers.
 * @returns
 */
export const Decorators = (props: {
  newComponent: React.ReactNode;
  oldComponent: React.ReactNode;
}) => {
  const [colorMode, setColorMode] = useState("light");
  return (
    <>
      <IconButton
        id="switch-color-mode"
        aria-label="Toggle theme"
        bg="#EDE6E6"
        p="8px"
        borderRadius="6px"
        position="fixed"
        top="1rem"
        right="1rem"
        icon={<RiMoonFill color="#000000" />}
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      />
      <IconButton
        id="reset-color-mode"
        aria-label="Toggle theme"
        bg="#EDE6E6"
        p="8px"
        borderRadius="6px"
        position="fixed"
        top="1rem"
        left="1rem"
        icon={<RiRecycleFill color="#000000" />}
        onClick={() => setColorMode("light")}
      />
      <Flex
        gap="10px"
        justifyContent="space-evenly"
        minH="calc(100vh - 31px)"
        alignItems="center"
      >
        <OldDecorator colorMode={colorMode}>{props.oldComponent}</OldDecorator>
        <NewDecorator colorMode={colorMode}>{props.newComponent}</NewDecorator>
      </Flex>
    </>
  );
};
