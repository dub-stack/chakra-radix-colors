import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select, Container } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const _BasicUsageNew = () => (
  <Container maxW="max-content">
    <Select color="pink.9" placeholder="Select option">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>
  </Container>
);

const _BasicUsageDefault = () => (
  <Container maxW="max-content">
    <Select color="pink.500" placeholder="Select option">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>
  </Container>
);

export const BasicUsage: ComponentStory<typeof _BasicUsageNew> = (args) => {
  return (
    <Decorators
      newComponent={<_BasicUsageNew />}
      oldComponent={<_BasicUsageDefault />}
    />
  );
};
