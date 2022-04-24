import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Avatar,
  Stack,
  AvatarGroup,
  PropsOf,
  AvatarBadge,
  AvatarBadgeProps,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const NewDefault = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      New Theme
    </Text>
    <Box p="4">
      <AvatarGroup size="lg" max={4} data-testid="avatar-group">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Kent Dodds" data-testid="avatar-with-badge">
          <AvatarBadge bg="green.9" boxSize="1.25em" />
        </Avatar>
        <Avatar name="Prosper Otemuyiwa" />
        <Avatar data-testid="avatar-no-name" />
        <Avatar />
      </AvatarGroup>
    </Box>
  </VStack>
);

const OldDefault = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    <Box p="4">
      <AvatarGroup size="lg" max={4}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Kent Dodds">
          <AvatarBadge bg="green.500" boxSize="1.25em" />
        </Avatar>
        <Avatar name="Prosper Otemuyiwa" />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </Box>
  </VStack>
);

export const Default: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewDefault data-testid="NewDefault" />}
      oldComponent={<OldDefault data-testid="OldDefault" />}
    />
  );
};
