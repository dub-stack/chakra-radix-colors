import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Switch,
  HStack,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack>
          <Switch colorScheme="blue" />
          <Switch colorScheme="blue" isChecked />
          <Switch colorScheme="blue" isDisabled />
          <Switch colorScheme="blue" isDisabled isChecked />
        </HStack>
      </Box>
      <Box bg={c("_grayDark.1")} p="4">
        <HStack>
          <Switch colorScheme="blueDark" />
          <Switch colorScheme="blueDark" isChecked />
          <Switch colorScheme="blueDark" isDisabled />
          <Switch colorScheme="blueDark" isDisabled isChecked />
        </HStack>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <HStack>
          <Switch colorScheme="blue" />
          <Switch colorScheme="blue" isChecked />
          <Switch colorScheme="blue" isDisabled />
          <Switch colorScheme="blue" isDisabled isChecked />
        </HStack>
      </Box>
      <Box p="4" visibility="hidden">
        <HStack>
          <Switch colorScheme="blueDark" />
          <Switch colorScheme="blueDark" isChecked />
          <Switch colorScheme="blueDark" isDisabled />
          <Switch colorScheme="blueDark" isDisabled isChecked />
        </HStack>
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

const NewBrightColor = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack>
          <Switch colorScheme="lime" />
          <Switch colorScheme="lime" isChecked />
          <Switch colorScheme="lime" isDisabled />
          <Switch colorScheme="lime" isDisabled isChecked />
        </HStack>
      </Box>
      <Box bg={c("_grayDark.1")} p="4">
        <HStack>
          <Switch colorScheme="limeDark" />
          <Switch colorScheme="limeDark" isChecked />
          <Switch colorScheme="limeDark" isDisabled />
          <Switch colorScheme="limeDark" isDisabled isChecked />
        </HStack>
      </Box>
    </VStack>
  );
};

const OldBrightColor = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <HStack>
          <Switch colorScheme="green" />
          <Switch colorScheme="green" isChecked />
          <Switch colorScheme="green" isDisabled />
          <Switch colorScheme="green" isDisabled isChecked />
        </HStack>
      </Box>
      <Box p="4" visibility="hidden">
        <HStack>
          <Switch colorScheme="green" />
          <Switch colorScheme="green" isChecked />
          <Switch colorScheme="green" isDisabled />
          <Switch colorScheme="green" isDisabled isChecked />
        </HStack>
      </Box>
    </VStack>
  );
};

export const BrightColor: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewBrightColor data-testid="NewBrightColor" />}
    oldComponent={<OldBrightColor data-testid="OldBrightColor" />}
  />
);
