import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormControl, FormLabel, Container } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / FormLabel",
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>;

const _InputExample = () => (
  <Container maxW="max-content">
    <FormControl id="first-name" isRequired isInvalid>
      <FormLabel>First name</FormLabel>
    </FormControl>
  </Container>
);

export const InputExample: ComponentStory<typeof _InputExample> = (args) => {
  return (
    <Decorators
      newComponent={<_InputExample />}
      oldComponent={<_InputExample />}
    />
  );
};
