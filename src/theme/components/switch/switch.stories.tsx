import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch, HStack } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const _Base = () => (
  <HStack>
    <Switch colorScheme="green" />
    <Switch colorScheme="green" isChecked />
    <Switch colorScheme="green" isDisabled />
    <Switch colorScheme="green" isChecked isDisabled />
  </HStack>
);
export const Base: ComponentStory<typeof _Base> = (args) => (
  <Decorators newComponent={<_Base />} oldComponent={<_Base />} />
);
