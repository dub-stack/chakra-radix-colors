import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Code } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Code",
  component: Code,
};

const _Basic = () => <Code colorScheme="pink">import React from react</Code>;
export const Basic: ComponentStory<typeof _Basic> = (args) => {
  return <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />;
};
