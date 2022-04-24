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
  Stack,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const _WithFocusAndErrorColorsOrig = () => (
  <Stack align="start" spacing="10">
    <Input focusBorderColor="lime" placeholder="Here is a sample placeholder" />

    <Input
      focusBorderColor="pink.400"
      placeholder="Here is a sample placeholder"
    />

    <Input
      isInvalid
      errorBorderColor="red.300"
      placeholder="Here is a sample placeholder"
    />

    <Input
      isInvalid
      errorBorderColor="crimson"
      placeholder="Here is a sample placeholder"
    />
  </Stack>
);
const _WithFocusAndErrorColorsNew = () => (
  <Stack align="start" spacing="10">
    <Input
      focusBorderColor="green.9"
      placeholder="Here is a sample placeholder"
    />

    <Input
      focusBorderColor="pink.9"
      placeholder="Here is a sample placeholder"
    />

    <Input
      isInvalid
      errorBorderColor="red.9"
      placeholder="Here is a sample placeholder"
    />

    <Input
      isInvalid
      errorBorderColor="amber.9"
      placeholder="Here is a sample placeholder"
    />
  </Stack>
);

export const WithFocusAndErrorColors: ComponentStory<
  typeof _WithFocusAndErrorColorsOrig
> = (args) => {
  return (
    <Decorators
      newComponent={<_WithFocusAndErrorColorsNew />}
      oldComponent={<_WithFocusAndErrorColorsOrig />}
    />
  );
};

const _WithVariants = () => (
  <Stack align="start">
    <Input variant="outline" placeholder="Outline" />
    <Input variant="filled" placeholder="Filled" />
    <Input variant="flushed" placeholder="Flushed" />
    <Input variant="unstyled" placeholder="Unstyled" />
  </Stack>
);

export const WithVariants: ComponentStory<typeof _WithVariants> = (args) => {
  return (
    <Decorators
      newComponent={<_WithVariants />}
      oldComponent={<_WithVariants />}
    />
  );
};

const _WithInputAddon = () => (
  <Stack align="start">
    <InputGroup>
      <InputLeftAddon children="+234" />
      <Input placeholder="Phone number..." />
    </InputGroup>

    <InputGroup size="sm">
      <InputLeftAddon children="https://" />
      <Input placeholder="website.com" />
      <InputRightAddon children=".com" />
    </InputGroup>
  </Stack>
);

export const WithInputAddon: ComponentStory<typeof _WithInputAddon> = (
  args
) => {
  return (
    <Decorators
      newComponent={<_WithInputAddon />}
      oldComponent={<_WithInputAddon />}
    />
  );
};
