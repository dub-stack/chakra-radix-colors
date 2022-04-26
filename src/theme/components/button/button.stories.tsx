import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Button,
  ButtonGroup,
  IconButton,
  StackProps,
  VStack,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useThemedColor } from "util/helpers";
import { Decorators } from "util/storybook-utils";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

export default {
  title: "Components / Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const NewSolidVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="light-color">
          <Button variant="solid" colorScheme="_gray">
            Gray
          </Button>
          <Button variant="solid" colorScheme="_gray" isDisabled>
            Gray
          </Button>
          <Button variant="solid" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="solid" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-color">
          <Button variant="solid" colorScheme="_grayDark">
            Gray
          </Button>
          <Button variant="solid" colorScheme="_grayDark" isDisabled>
            Gray
          </Button>
          <Button
            variant="solid"
            colorScheme="redDark"
            leftIcon={<EmailIcon />}
          >
            Red
          </Button>
          <Button
            variant="solid"
            colorScheme="blueDark"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="solid" colorScheme="orangeDark" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

const OldSolidVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <HStack data-testid="light-color">
          <Button variant="solid" colorScheme="gray">
            Gray
          </Button>
          <Button variant="solid" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="solid" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="solid" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <HStack data-testid="dark-color">
          <Button variant="solid" colorScheme="gray">
            Gray
          </Button>
          <Button variant="solid" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="solid" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="solid" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export const SolidVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewSolidVariant data-testid="NewSolidVariant" />}
      oldComponent={<OldSolidVariant data-testid="OldSolidVariant" />}
    />
  );
};

const NewGhostVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="light-color">
          <Button variant="ghost" colorScheme="_gray">
            Gray
          </Button>
          <Button variant="ghost" colorScheme="_gray" isDisabled>
            Gray
          </Button>
          <Button variant="ghost" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="ghost" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-color">
          <Button variant="ghost" colorScheme="_grayDark">
            Gray
          </Button>
          <Button variant="ghost" colorScheme="_grayDark" isDisabled>
            Gray
          </Button>
          <Button
            variant="ghost"
            colorScheme="redDark"
            leftIcon={<EmailIcon />}
          >
            Red
          </Button>
          <Button
            variant="ghost"
            colorScheme="blueDark"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="ghost" colorScheme="orangeDark" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

const OldGhostVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <HStack data-testid="light-color">
          <Button variant="ghost" colorScheme="gray">
            Gray
          </Button>
          <Button variant="ghost" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="ghost" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="ghost" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <HStack data-testid="dark-color">
          <Button variant="ghost" colorScheme="gray">
            Gray
          </Button>
          <Button variant="ghost" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="ghost" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="ghost" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export const GhostVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewGhostVariant data-testid="NewGhostVariant" />}
      oldComponent={<OldGhostVariant data-testid="OldGhostVariant" />}
    />
  );
};

const NewOutlineVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="light-color">
          <Button variant="outline" colorScheme="_gray">
            Gray
          </Button>
          <Button variant="outline" colorScheme="_gray" isDisabled>
            Gray
          </Button>
          <Button variant="outline" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="outline" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-color">
          <Button variant="outline" colorScheme="_grayDark">
            Gray
          </Button>
          <Button variant="outline" colorScheme="_grayDark" isDisabled>
            Gray
          </Button>
          <Button
            variant="outline"
            colorScheme="redDark"
            leftIcon={<EmailIcon />}
          >
            Red
          </Button>
          <Button
            variant="outline"
            colorScheme="blueDark"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="outline" colorScheme="orangeDark" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

const OldOutlineVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <HStack data-testid="light-color">
          <Button variant="outline" colorScheme="gray">
            Gray
          </Button>
          <Button variant="outline" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="outline" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="outline" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <HStack data-testid="dark-color">
          <Button variant="outline" colorScheme="gray">
            Gray
          </Button>
          <Button variant="outline" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="outline" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="outline" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export const OutlineVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewOutlineVariant data-testid="NewOutlineVariant" />}
      oldComponent={<OldOutlineVariant data-testid="OldOutlineVariant" />}
    />
  );
};

const NewLinkVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="light-color">
          <Button variant="link" colorScheme="_gray">
            Gray
          </Button>
          <Button variant="link" colorScheme="_gray" isDisabled>
            Gray
          </Button>
          <Button variant="link" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="link"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="link" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-color">
          <Button variant="link" colorScheme="_grayDark">
            Gray
          </Button>
          <Button variant="link" colorScheme="_grayDark" isDisabled>
            Gray
          </Button>
          <Button variant="link" colorScheme="redDark" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="link"
            colorScheme="blueDark"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="link" colorScheme="orangeDark" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

const OldLinkVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <HStack data-testid="light-color">
          <Button variant="link" colorScheme="gray">
            Gray
          </Button>
          <Button variant="link" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="link" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="link"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="link" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <HStack data-testid="dark-color">
          <Button variant="link" colorScheme="gray">
            Gray
          </Button>
          <Button variant="link" colorScheme="gray" isDisabled>
            Gray
          </Button>
          <Button variant="link" colorScheme="red" leftIcon={<EmailIcon />}>
            Red
          </Button>
          <Button
            variant="link"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="link" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export const LinkVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewLinkVariant data-testid="NewLinkVariant" />}
      oldComponent={<OldLinkVariant data-testid="OldLinkVariant" />}
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
        <HStack data-testid="light-color">
          <Button variant="solid" colorScheme="yellow">
            Yellow
          </Button>
          <Button variant="solid" colorScheme="lime" leftIcon={<EmailIcon />}>
            Lime
          </Button>
          <Button
            variant="solid"
            colorScheme="sky"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Sky
          </Button>
          <Button variant="solid" colorScheme="amber" isDisabled>
            Amber
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <HStack data-testid="dark-color">
          <Button variant="solid" colorScheme="yellowDark">
            Yellow
          </Button>
          <Button
            variant="solid"
            colorScheme="limeDark"
            leftIcon={<EmailIcon />}
          >
            Lime
          </Button>
          <Button
            variant="solid"
            colorScheme="skyDark"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Sky
          </Button>
          <Button variant="solid" colorScheme="amberDark" isDisabled>
            Amber
          </Button>
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
        <HStack data-testid="light-color">
          <Button variant="solid" colorScheme="yellow">
            Yellow
          </Button>
          <Button variant="solid" colorScheme="green" leftIcon={<EmailIcon />}>
            Green
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="solid" colorScheme="orange" isDisabled>
            Orange
          </Button>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <HStack data-testid="dark-color">
          <Button variant="solid" colorScheme="yellow">
            Yellow
          </Button>
          <Button variant="solid" colorScheme="green" leftIcon={<EmailIcon />}>
            Green
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            rightIcon={<ArrowForwardIcon />}
            isLoading
          >
            Blue
          </Button>
          <Button variant="solid" colorScheme="orange" isDisabled>
            Orange
          </Button>
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
