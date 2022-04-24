import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CloseButton } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / CloseButton",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const _Default = () => <CloseButton />;
export const Default: ComponentStory<typeof CloseButton> = (args) => {
  return <Decorators newComponent={<_Default />} oldComponent={<_Default />} />;
};

const _State = () => <CloseButton isDisabled />;
export const State: ComponentStory<typeof CloseButton> = (args) => {
  return <Decorators newComponent={<_State />} oldComponent={<_State />} />;
};

const _Sizes = () => (
  <>
    <CloseButton size="sm" />
    <CloseButton size="md" />
    <CloseButton size="lg" />
  </>
);
export const Sizes: ComponentStory<typeof CloseButton> = (args) => {
  return <Decorators newComponent={<_Sizes />} oldComponent={<_Sizes />} />;
};
