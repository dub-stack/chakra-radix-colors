import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Radio,
  RadioGroup,
  StackProps,
  VStack,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <RadioGroup defaultValue="1">
          <HStack data-testid="new-row-1">
            <Radio value="1" isDisabled>
              Checked
            </Radio>
            <Radio value="2">Unchecked</Radio>
          </HStack>
        </RadioGroup>
        <RadioGroup defaultValue="2">
          <HStack data-testid="new-row-2">
            <Radio value="1" isDisabled>
              Checked
            </Radio>
            <Radio value="2">Unchecked</Radio>
          </HStack>
        </RadioGroup>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <RadioGroup defaultValue="1">
          <HStack data-testid="old-row-1">
            <Radio value="1" isDisabled>
              Checked
            </Radio>
            <Radio value="2">Unchecked</Radio>
          </HStack>
        </RadioGroup>
        <RadioGroup defaultValue="2">
          <HStack data-testid="old-row-2">
            <Radio value="1" isDisabled>
              Checked
            </Radio>
            <Radio value="2">Unchecked</Radio>
          </HStack>
        </RadioGroup>
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
