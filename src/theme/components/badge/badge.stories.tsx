import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, VStack, HStack, StackProps, Box, Text } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const NewSolidVariant = (props: StackProps) => {
  const c = useThemedColor();

  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("gray.1")} p="4">
        <HStack>
          <Badge
            variant="solid"
            colorScheme="green"
            data-testid="light-badge-1"
          >
            Green
          </Badge>
          <Badge variant="solid" colorScheme="red">
            Red
          </Badge>
          <Badge variant="solid" colorScheme="blue">
            Blue
          </Badge>
          <Badge
            variant="solid"
            colorScheme="_gray"
            data-testid="light-badge-4"
          >
            _Gray
          </Badge>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("grayDark.1")} p="4">
        <HStack>
          <Badge
            variant="solid"
            colorScheme="greenDark"
            data-testid="dark-badge-1"
          >
            Green
          </Badge>
          <Badge variant="solid" colorScheme="redDark">
            Red
          </Badge>
          <Badge variant="solid" colorScheme="blueDark">
            Blue
          </Badge>
          <Badge
            variant="solid"
            colorScheme="_grayDark"
            data-testid="dark-badge-4"
          >
            _Gray
          </Badge>
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
        New Theme
      </Text>
      <Box p="4">
        <HStack>
          <Badge variant="solid" colorScheme="green">
            Green
          </Badge>
          <Badge variant="solid" colorScheme="red">
            Red
          </Badge>
          <Badge variant="solid" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="solid" colorScheme="gray">
            Gray
          </Badge>
        </HStack>
      </Box>
      {/* no dark version per mode */}
      <Box p="4" visibility="hidden">
        <HStack>
          <Badge variant="solid" colorScheme="green">
            Green
          </Badge>
          <Badge variant="solid" colorScheme="red">
            Red
          </Badge>
          <Badge variant="solid" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="solid" colorScheme="gray">
            Gray
          </Badge>
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

const NewSubtleVariant = (props: StackProps) => {
  const c = useThemedColor();

  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("gray.1")} p="4">
        <HStack>
          <Badge
            variant="subtle"
            colorScheme="green"
            data-testid="light-badge-1"
          >
            Green
          </Badge>
          <Badge variant="subtle" colorScheme="red">
            Red
          </Badge>
          <Badge variant="subtle" colorScheme="blue">
            Blue
          </Badge>
          <Badge
            variant="subtle"
            colorScheme="_gray"
            data-testid="light-badge-4"
          >
            _Gray
          </Badge>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("grayDark.1")} p="4">
        <HStack>
          <Badge
            variant="subtle"
            colorScheme="greenDark"
            data-testid="dark-badge-1"
          >
            Green
          </Badge>
          <Badge variant="subtle" colorScheme="redDark">
            Red
          </Badge>
          <Badge variant="subtle" colorScheme="blueDark">
            Blue
          </Badge>
          <Badge
            variant="subtle"
            colorScheme="_grayDark"
            data-testid="dark-badge-4"
          >
            _Gray
          </Badge>
        </HStack>
      </Box>
    </VStack>
  );
};

const OldSubtleVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <HStack>
          <Badge variant="subtle" colorScheme="green">
            Green
          </Badge>
          <Badge variant="subtle" colorScheme="red">
            Red
          </Badge>
          <Badge variant="subtle" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="subtle" colorScheme="gray">
            Gray
          </Badge>
        </HStack>
      </Box>
      {/* no dark version per mode */}
      <Box p="4" visibility="hidden">
        <HStack>
          <Badge variant="subtle" colorScheme="green">
            Green
          </Badge>
          <Badge variant="subtle" colorScheme="red">
            Red
          </Badge>
          <Badge variant="subtle" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="subtle" colorScheme="gray">
            Gray
          </Badge>
        </HStack>
      </Box>
    </VStack>
  );
};

export const SubtleVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewSubtleVariant data-testid="NewSubtleVariant" />}
      oldComponent={<OldSubtleVariant data-testid="OldSubtleVariant" />}
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
      <Box bg={c("gray.1")} p="4">
        <HStack>
          <Badge
            variant="outline"
            colorScheme="green"
            data-testid="light-badge-1"
          >
            Green
          </Badge>
          <Badge variant="outline" colorScheme="red">
            Red
          </Badge>
          <Badge variant="outline" colorScheme="blue">
            Blue
          </Badge>
          <Badge
            variant="outline"
            colorScheme="_gray"
            data-testid="light-badge-4"
          >
            _Gray
          </Badge>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("grayDark.1")} p="4">
        <HStack>
          <Badge
            variant="outline"
            colorScheme="greenDark"
            data-testid="dark-badge-1"
          >
            Green
          </Badge>
          <Badge variant="outline" colorScheme="redDark">
            Red
          </Badge>
          <Badge variant="outline" colorScheme="blueDark">
            Blue
          </Badge>
          <Badge
            variant="outline"
            colorScheme="_grayDark"
            data-testid="dark-badge-4"
          >
            _Gray
          </Badge>
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
        New Theme
      </Text>
      <Box p="4">
        <HStack>
          <Badge variant="outline" colorScheme="green">
            Green
          </Badge>
          <Badge variant="outline" colorScheme="red">
            Red
          </Badge>
          <Badge variant="outline" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="outline" colorScheme="gray">
            Gray
          </Badge>
        </HStack>
      </Box>
      {/* no dark version per mode */}
      <Box p="4" visibility="hidden">
        <HStack>
          <Badge variant="outline" colorScheme="green">
            Green
          </Badge>
          <Badge variant="outline" colorScheme="red">
            Red
          </Badge>
          <Badge variant="outline" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="outline" colorScheme="gray">
            Gray
          </Badge>
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

const NewBrightColor = (props: StackProps) => {
  const c = useThemedColor();

  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("gray.1")} p="4">
        <HStack>
          <Badge variant="solid" colorScheme="lime" data-testid="light-badge-1">
            Lime
          </Badge>
          <Badge variant="solid" colorScheme="amber">
            Amber
          </Badge>
          <Badge variant="solid" colorScheme="sky">
            Sky
          </Badge>
          <Badge variant="solid" colorScheme="mint" data-testid="light-badge-4">
            Mint
          </Badge>
        </HStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("grayDark.1")} p="4">
        <HStack>
          <Badge
            variant="solid"
            colorScheme="limeDark"
            data-testid="dark-badge-1"
          >
            Lime
          </Badge>
          <Badge variant="solid" colorScheme="amberDark">
            Amber
          </Badge>
          <Badge variant="solid" colorScheme="skyDark">
            Sky
          </Badge>
          <Badge
            variant="solid"
            colorScheme="mintDark"
            data-testid="dark-badge-4"
          >
            Mint
          </Badge>
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
        New Theme
      </Text>
      <Box p="4">
        <HStack>
          <Badge variant="solid" colorScheme="green">
            Green
          </Badge>
          <Badge variant="solid" colorScheme="yellow">
            Yellow
          </Badge>
          <Badge variant="solid" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="solid" colorScheme="teal">
            Teal
          </Badge>
        </HStack>
      </Box>
      {/* no dark version per mode */}
      <Box p="4" visibility="hidden">
        <HStack>
          <Badge variant="solid" colorScheme="green">
            Green
          </Badge>
          <Badge variant="solid" colorScheme="yellow">
            Yellow
          </Badge>
          <Badge variant="solid" colorScheme="blue">
            Blue
          </Badge>
          <Badge variant="solid" colorScheme="teal">
            Teal
          </Badge>
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
