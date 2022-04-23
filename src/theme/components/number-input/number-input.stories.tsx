import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / NumberInput",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const _Basic = () => (
  <NumberInput>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export const Basic: ComponentStory<typeof _Basic> = (args) => {
  return <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />;
};
