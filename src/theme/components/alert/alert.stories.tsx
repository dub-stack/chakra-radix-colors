import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  chakra,
  AlertProps,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const _Basic = (props: AlertProps) => (
  <Alert status="error" variant="solid" borderRadius="md" {...props}>
    <AlertIcon />
    <AlertTitle mr={2}>Outdated</AlertTitle>
    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
  </Alert>
);
export const Basic: ComponentStory<typeof Alert> = (args) => {
  return <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />;
};

const _Subtle = () => (
  <Alert status="success" mx="auto" alignItems="start">
    <AlertIcon />
    <chakra.div flex="1">
      <AlertTitle>Holy Smokes</AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </chakra.div>
  </Alert>
);
export const Subtle: ComponentStory<typeof Alert> = (args) => {
  return (
    <Decorators newComponent={<_Subtle />} defaultComponent={<_Subtle />} />
  );
};

const _LeftAccent = () => (
  <Alert variant="left-accent" mx="auto" alignItems="start">
    <AlertIcon />
    <chakra.div flex="1">
      <AlertTitle>Holy Smokes</AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </chakra.div>
  </Alert>
);
export const LeftAccent: ComponentStory<typeof Alert> = (args) => {
  return (
    <Decorators
      newComponent={<_LeftAccent />}
      defaultComponent={<_LeftAccent />}
    />
  );
};

const _TopAccent = () => (
  <Alert
    variant="top-accent"
    mx="auto"
    alignItems="flex-start"
    pt="3"
    rounded="md"
  >
    <AlertIcon />
    <chakra.div flex="1">
      <AlertTitle display="block" mr="2">
        Holy Smokes
      </AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </chakra.div>
  </Alert>
);
export const TopAccent: ComponentStory<typeof Alert> = (args) => {
  return (
    <Decorators
      newComponent={<_TopAccent />}
      defaultComponent={<_TopAccent />}
    />
  );
};

export const Bright: ComponentStory<typeof Alert> = (args) => {
  return (
    <Decorators
      newComponent={<_Basic colorScheme="sky" />}
      defaultComponent={<_Basic />}
    />
  );
};
