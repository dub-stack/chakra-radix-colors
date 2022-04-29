import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { chakra, PropsOf, useMultiStyleConfig } from "@chakra-ui/system";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / FormError",
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <FormControl isInvalid>
          <FormErrorMessage>
            <FormErrorIcon />
            Email is a required field.
          </FormErrorMessage>
        </FormControl>
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
        <FormControl isInvalid>
          <FormErrorMessage>
            <FormErrorIcon />
            Email is a required field.
          </FormErrorMessage>
        </FormControl>
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
