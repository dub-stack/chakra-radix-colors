import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Kbd } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Kbd",
  component: Kbd,
} as ComponentMeta<typeof Kbd>;

const _Kbd = () => <Kbd>Ctrl + L</Kbd>;

export const KbdExample: ComponentStory<typeof _Kbd> = (args) => {
  return <Decorators newComponent={<_Kbd />} defaultComponent={<_Kbd />} />;
};
