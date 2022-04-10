import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, useColorMode, useTheme } from "@chakra-ui/react";

export default {
  title: "Colors",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Box h="200px" w="200px" bg="amberA.10" onClick={toggleColorMode} />
      <Box bgColor="_grayDark.1" h="200px" w="200px" />
    </>
  );
};

export const Primary = Template.bind({});
