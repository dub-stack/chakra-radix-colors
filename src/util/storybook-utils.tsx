import React, { useState } from "react";
import {
  IconButton,
  ChakraProvider,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { RiMoonFill } from "react-icons/ri";
import theme from "../theme";

/**
 * Effectively a hook that is used to toggle the colorMode for a Provider.
 * This is needed instead of a hook, because we must place this downstream from
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

const NewDecorator: React.FC<{ colorMode: string }> = (props) => (
  <ChakraProvider theme={theme}>
    <SetColorMode colorMode={props.colorMode} />
    {props.children}
  </ChakraProvider>
);

const DefaultDecorator: React.FC<{ colorMode: string }> = (props) => (
  <ChakraProvider>
    <SetColorMode colorMode={props.colorMode} />
    {props.children}
  </ChakraProvider>
);

export const Decorators = (props: {
  newComponent: React.ReactNode;
  defaultComponent: React.ReactNode;
}) => {
  const [colorMode, setColorMode] = useState("light");
  return (
    <>
      <IconButton
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
      <Flex
        gap="10px"
        justifyContent="space-evenly"
        minH="calc(100vh - 31px)"
        alignItems="center"
      >
        <DefaultDecorator colorMode={colorMode}>
          {props.defaultComponent}
        </DefaultDecorator>
        <NewDecorator colorMode={colorMode}>{props.newComponent}</NewDecorator>
      </Flex>
    </>
  );
};
