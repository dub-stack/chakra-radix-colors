import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / NumberInput",
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Box bg={c("_gray.1")} p="4">
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper data-testid="increment-stepper" />
            <NumberDecrementStepper data-testid="decrement-stepper" />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Box p="4">
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper data-testid="increment-stepper" />
            <NumberDecrementStepper data-testid="decrement-stepper" />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewDefault data-testid="NewDefault" />}
    oldComponent={<OldDefault data-testid="OldDefault" />}
  />
);
