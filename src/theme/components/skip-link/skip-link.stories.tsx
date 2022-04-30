import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { VStack, StackProps, Box, Text } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / SkipNavLink",
  component: SkipNavLink,
} as ComponentMeta<typeof SkipNavLink>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <SkipNavLink>Skip to Content</SkipNavLink>
        <SkipNavContent />
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <SkipNavLink>Skip to Content</SkipNavLink>
        <SkipNavContent />
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
