import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textarea, StackProps, VStack, Box, Text } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack data-testid="textarea-stack">
          <Textarea variant="outline" defaultValue="This is a textarea" />
          <Textarea variant="flushed" defaultValue="This is a textarea" />
          <Textarea variant="filled" defaultValue="This is a textarea" />
        </VStack>
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
        <VStack data-testid="textarea-stack">
          <Textarea variant="outline" defaultValue="This is a textarea" />
          <Textarea variant="flushed" defaultValue="This is a textarea" />
          <Textarea variant="filled" defaultValue="This is a textarea" />
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
