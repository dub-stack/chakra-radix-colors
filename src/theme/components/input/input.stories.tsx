import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  InputProps,
  Container,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const NewFilledVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack>
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input variant="filled" placeholder="Type here ..." id="sup" />
          </InputGroup>
          <Input variant="filled" placeholder="Type here ..." isReadOnly />
          <Input variant="filled" placeholder="Type here ..." isDisabled />
          <Input variant="filled" placeholder="Type here ..." isInvalid />
        </VStack>
      </Box>
    </VStack>
  );
};

const OldFilledVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack>
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input variant="filled" placeholder="Type here ..." />
          </InputGroup>
          <Input variant="filled" placeholder="Type here ..." isReadOnly />
          <Input variant="filled" placeholder="Type here ..." isDisabled />
          <Input variant="filled" placeholder="Type here ..." isInvalid />
        </VStack>
      </Box>
    </VStack>
  );
};

export const FilledVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewFilledVariant data-testid="NewFilledVariant" />}
    oldComponent={<OldFilledVariant data-testid="OldFilledVariant" />}
  />
);

const NewFlushedVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack>
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input variant="flushed" placeholder="Type here ..." />
          </InputGroup>
          <Input variant="flushed" placeholder="Type here ..." isReadOnly />
          <Input variant="flushed" placeholder="Type here ..." isDisabled />
          <Input variant="flushed" placeholder="Type here ..." isInvalid />
        </VStack>
      </Box>
    </VStack>
  );
};

const OldFlushedVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack>
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input variant="flushed" placeholder="Type here ..." />
          </InputGroup>
          <Input variant="flushed" placeholder="Type here ..." isReadOnly />
          <Input variant="flushed" placeholder="Type here ..." isDisabled />
          <Input variant="flushed" placeholder="Type here ..." isInvalid />
        </VStack>
      </Box>
    </VStack>
  );
};

export const FlushedVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewFlushedVariant data-testid="NewFlushedVariant" />}
    oldComponent={<OldFlushedVariant data-testid="OldFlushedVariant" />}
  />
);

const NewOutlineVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack>
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input variant="outline" placeholder="Type here ..." />
          </InputGroup>
          <Input variant="outline" placeholder="Type here ..." isReadOnly />
          <Input variant="outline" placeholder="Type here ..." isDisabled />
          <Input variant="outline" placeholder="Type here ..." isInvalid />
        </VStack>
      </Box>
    </VStack>
  );
};

const OldOutlineVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack>
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input variant="outline" placeholder="Type here ..." />
          </InputGroup>
          <Input variant="outline" placeholder="Type here ..." isReadOnly />
          <Input variant="outline" placeholder="Type here ..." isDisabled />
          <Input variant="outline" placeholder="Type here ..." isInvalid />
        </VStack>
      </Box>
    </VStack>
  );
};

export const OutlineVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewOutlineVariant data-testid="NewOutlineVariant" />}
    oldComponent={<OldOutlineVariant data-testid="OldOutlineVariant" />}
  />
);
