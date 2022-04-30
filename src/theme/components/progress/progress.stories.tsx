import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Progress,
  ProgressLabel,
  Container,
  StackProps,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack w="300px">
          <Progress colorScheme="blue" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="blue" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <VStack w="300px">
          <Progress colorScheme="blueDark" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="blueDark" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
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
        <VStack w="300px">
          <Progress colorScheme="blue" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="blue" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <VStack w="300px">
          <Progress colorScheme="blue" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="blue" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
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
        <VStack w="300px">
          <Progress colorScheme="sky" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="sky" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <VStack w="300px">
          <Progress colorScheme="skyDark" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="skyDark" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
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
        <VStack w="300px">
          <Progress colorScheme="yellow" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="yellow" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <VStack w="300px">
          <Progress colorScheme="yellow" value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
          <Progress colorScheme="yellow" hasStripe value={80} w="full">
            <ProgressLabel>80%</ProgressLabel>
          </Progress>
        </VStack>
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
