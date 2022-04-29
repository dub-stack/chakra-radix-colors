import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  chakra,
  Box,
  VStack,
  Text,
  StackProps,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const NewSolidVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Alert
          status="error"
          variant="solid"
          borderRadius="md"
          colorScheme="red"
          data-testid="AlertLight"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Alert
          status="error"
          variant="solid"
          borderRadius="md"
          colorScheme="redDark"
          data-testid="AlertDark"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </Box>
    </VStack>
  );
};
const OldSolidVariant = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    {/* display the light version in light mode */}
    <Box p="4">
      <Alert status="error" variant="solid" borderRadius="md" colorScheme="red">
        <AlertIcon />
        <AlertTitle mr={2}>Outdated</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </Box>
    {/* default has no dark version per mode */}
    <Box p="4" visibility="hidden">
      <Alert status="error" variant="solid" borderRadius="md" colorScheme="red">
        <AlertIcon />
        <AlertTitle mr={2}>Outdated</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </Box>
  </VStack>
);
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
      <Box bg={c("_gray.1")} p="4">
        <Alert
          status="success"
          variant="subtle"
          borderRadius="md"
          data-testid="AlertLight"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Alert
          status="success"
          variant="subtle"
          borderRadius="md"
          colorScheme="greenDark"
          data-testid="AlertDark"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </Box>
    </VStack>
  );
};
const OldSubtleVariant = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    {/* display the light version in light mode */}
    <Box p="4">
      <Alert status="success" variant="subtle" borderRadius="md">
        <AlertIcon />
        <AlertTitle mr={2}>Outdated</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </Box>
    {/* default has no dark version per mode */}
    <Box p="4" visibility="hidden">
      <Alert status="success" variant="subtle" borderRadius="md">
        <AlertIcon />
        <AlertTitle mr={2}>Outdated</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </Box>
  </VStack>
);
export const SubtleVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewSubtleVariant data-testid="NewSubtleVariant" />}
      oldComponent={<OldSubtleVariant data-testid="OldSubtleVariant" />}
    />
  );
};

const NewLeftAccentVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Alert
          variant="left-accent"
          alignItems="start"
          colorScheme="blue"
          data-testid="AlertLight"
        >
          <AlertIcon />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Alert
          variant="left-accent"
          alignItems="start"
          colorScheme="blueDark"
          data-testid="AlertDark"
        >
          <AlertIcon />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      </Box>
    </VStack>
  );
};
const OldLeftAccentVariant = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    {/* display the light version in light mode */}
    <Box p="4">
      <Alert variant="left-accent" alignItems="start" colorScheme="blue">
        <AlertIcon />
        <chakra.div flex="1">
          <AlertTitle>Holy Smokes</AlertTitle>
          <AlertDescription>Something just happened!</AlertDescription>
        </chakra.div>
      </Alert>
    </Box>
    {/* default has no dark version per mode */}
    <Box p="4" visibility="hidden">
      <Alert variant="left-accent" alignItems="start" colorScheme="blue">
        <AlertIcon />
        <chakra.div flex="1">
          <AlertTitle>Holy Smokes</AlertTitle>
          <AlertDescription>Something just happened!</AlertDescription>
        </chakra.div>
      </Alert>
    </Box>
  </VStack>
);
export const LeftAccentVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewLeftAccentVariant data-testid="NewLeftAccentVariant" />}
      oldComponent={<OldLeftAccentVariant data-testid="OldLeftAccentVariant" />}
    />
  );
};

const NewTopAccentVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Alert
          variant="top-accent"
          alignItems="start"
          colorScheme="blue"
          data-testid="AlertLight"
        >
          <AlertIcon />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Alert
          variant="top-accent"
          alignItems="start"
          colorScheme="blueDark"
          data-testid="AlertDark"
        >
          <AlertIcon />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      </Box>
    </VStack>
  );
};
const OldTopAccentVariant = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    {/* display the light version in light mode */}
    <Box p="4">
      <Alert variant="top-accent" alignItems="start" colorScheme="blue">
        <AlertIcon />
        <chakra.div flex="1">
          <AlertTitle>Holy Smokes</AlertTitle>
          <AlertDescription>Something just happened!</AlertDescription>
        </chakra.div>
      </Alert>
    </Box>
    {/* default has no dark version per mode */}
    <Box p="4" visibility="hidden">
      <Alert variant="top-accent" alignItems="start" colorScheme="blue">
        <AlertIcon />
        <chakra.div flex="1">
          <AlertTitle>Holy Smokes</AlertTitle>
          <AlertDescription>Something just happened!</AlertDescription>
        </chakra.div>
      </Alert>
    </Box>
  </VStack>
);
export const TopAccentVariant: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewTopAccentVariant data-testid="NewTopAccentVariant" />}
      oldComponent={<OldTopAccentVariant data-testid="OldTopAccentVariant" />}
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
        <Alert
          status="error"
          variant="solid"
          borderRadius="md"
          colorScheme="amber"
          data-testid="AlertLight"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Alert
          status="error"
          variant="solid"
          borderRadius="md"
          colorScheme="amberDark"
          data-testid="AlertDark"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </Box>
    </VStack>
  );
};
const OldBrightColor = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    {/* display the light version in light mode */}
    <Box p="4">
      <Alert
        status="error"
        variant="solid"
        borderRadius="md"
        colorScheme="yellow"
      >
        <AlertIcon />
        <AlertTitle mr={2}>Outdated</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </Box>
    {/* default has no dark version per mode */}
    <Box p="4" visibility="hidden">
      <Alert
        status="error"
        variant="solid"
        borderRadius="md"
        colorScheme="yellow"
      >
        <AlertIcon />
        <AlertTitle mr={2}>Outdated</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>
    </Box>
  </VStack>
);
export const BrightColor: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewBrightColor data-testid="NewBrightColor" />}
      oldComponent={<OldBrightColor data-testid="OldBrightColor" />}
    />
  );
};
