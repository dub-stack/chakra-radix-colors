import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / PinInput",
  component: PinInput,
} as ComponentMeta<typeof PinInput>;

const _Basic = () => (
  <HStack>
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  </HStack>
);

export const Basic: ComponentStory<typeof _Basic> = (args) => {
  return <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />;
};
