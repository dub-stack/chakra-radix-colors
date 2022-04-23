import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Colors",
  component: Box,
} as ComponentMeta<typeof Box>;

const New = <Box h="200px" w="200px" bg="amberA.10" />;
const Default = <Box h="200px" w="200px" bg="orange.200" />;

const Template: ComponentStory<typeof Box> = (args) => {
  return <Decorators newComponent={New} defaultComponent={Default} />;
};

export const Primary = Template.bind({});
