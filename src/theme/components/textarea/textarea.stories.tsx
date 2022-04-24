import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textarea } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const _Outline = () => (
  <Textarea variant="outline" defaultValue="This is a textarea" />
);
export const Outline: ComponentStory<typeof _Outline> = (args) => (
  <Decorators newComponent={<_Outline />} oldComponent={<_Outline />} />
);

const _Flushed = () => (
  <Textarea variant="flushed" defaultValue="This is a textarea" />
);
export const Flushed: ComponentStory<typeof _Flushed> = (args) => (
  <Decorators newComponent={<_Flushed />} oldComponent={<_Flushed />} />
);

const _Filled = () => (
  <Textarea variant="filled" defaultValue="This is a textarea" />
);
export const Filled: ComponentStory<typeof _Filled> = (args) => (
  <Decorators newComponent={<_Filled />} oldComponent={<_Filled />} />
);
