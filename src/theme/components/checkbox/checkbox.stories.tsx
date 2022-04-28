import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Checkbox,
  HStack,
  VStack,
  StackProps,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="light-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="green" />
          <Checkbox value="thing-2" isChecked isDisabled colorScheme="green" />
          <Checkbox value="thing-3" isIndeterminate colorScheme="green" />
          <Checkbox value="thing-4" isDisabled colorScheme="green" />
          <Checkbox value="thing-5" isInvalid colorScheme="green" />
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="greenDark" />
          <Checkbox
            value="thing-2"
            isChecked
            isDisabled
            colorScheme="greenDark"
          />
          <Checkbox value="thing-3" isIndeterminate colorScheme="greenDark" />
          <Checkbox value="thing-4" isDisabled colorScheme="greenDark" />
          <Checkbox value="thing-5" isInvalid colorScheme="greenDark" />
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
        <HStack data-testid="light-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="green" />
          <Checkbox value="thing-2" isChecked isDisabled colorScheme="green" />
          <Checkbox value="thing-3" isIndeterminate colorScheme="green" />
          <Checkbox value="thing-4" isDisabled colorScheme="green" />
          <Checkbox value="thing-5" isInvalid colorScheme="green" />
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4">
        <HStack data-testid="dark-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="green" />
          <Checkbox value="thing-2" isChecked isDisabled colorScheme="green" />
          <Checkbox value="thing-3" isIndeterminate colorScheme="green" />
          <Checkbox value="thing-4" isDisabled colorScheme="green" />
          <Checkbox value="thing-5" isInvalid colorScheme="green" />
        </HStack>
      </Box>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewDefault data-testid="NewDefault" />}
      oldComponent={<OldDefault data-testid="OldDefault" />}
    />
  );
};

const NewBrightColor = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="light-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="lime" />
          <Checkbox value="thing-2" isChecked isDisabled colorScheme="lime" />
          <Checkbox value="thing-3" isIndeterminate colorScheme="lime" />
          <Checkbox value="thing-4" isDisabled colorScheme="lime" />
          <Checkbox value="thing-5" isInvalid colorScheme="lime" />
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="limeDark" />
          <Checkbox
            value="thing-2"
            isChecked
            isDisabled
            colorScheme="limeDark"
          />
          <Checkbox value="thing-3" isIndeterminate colorScheme="limeDark" />
          <Checkbox value="thing-4" isDisabled colorScheme="limeDark" />
          <Checkbox value="thing-5" isInvalid colorScheme="limeDark" />
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
        <HStack data-testid="light-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="yellow" />
          <Checkbox value="thing-2" isChecked isDisabled colorScheme="yellow" />
          <Checkbox value="thing-3" isIndeterminate colorScheme="yellow" />
          <Checkbox value="thing-4" isDisabled colorScheme="yellow" />
          <Checkbox value="thing-5" isInvalid colorScheme="yellow" />
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4">
        <HStack data-testid="dark-checkboxes">
          <Checkbox value="thing-1" isChecked colorScheme="yellow" />
          <Checkbox value="thing-2" isChecked isDisabled colorScheme="yellow" />
          <Checkbox value="thing-3" isIndeterminate colorScheme="yellow" />
          <Checkbox value="thing-4" isDisabled colorScheme="yellow" />
          <Checkbox value="thing-5" isInvalid colorScheme="yellow" />
        </HStack>
      </Box>
    </VStack>
  );
};

export const BrightColor: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewBrightColor data-testid="NewBrightColor" />}
      oldComponent={<OldBrightColor data-testid="OldBrightColor" />}
    />
  );
};
