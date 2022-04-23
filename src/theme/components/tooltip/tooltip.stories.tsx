import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const _WithString = () => (
  <Tooltip label="This is a chakra tooltip">Hover me</Tooltip>
);

export const WithString: ComponentStory<typeof _WithString> = (args) => (
  <Decorators
    newComponent={<_WithString />}
    defaultComponent={<_WithString />}
  />
);
