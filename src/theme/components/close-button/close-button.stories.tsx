import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  CloseButton,
  StackProps,
  VStack,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useThemedColor } from "util/helpers";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / CloseButton",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <HStack data-testid="close-buttons">
          <CloseButton />
          <CloseButton isDisabled />
        </HStack>
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
        <HStack data-testid="close-buttons">
          <CloseButton />
          <CloseButton isDisabled />
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
