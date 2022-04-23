import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { Container } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / SkipNavLink",
  component: SkipNavLink,
} as ComponentMeta<typeof SkipNavLink>;

const _BasicExample = () => (
  <>
    <SkipNavLink>Skip to Content</SkipNavLink>
    <SkipNavContent />
  </>
);
export const BasicExample: ComponentStory<typeof _BasicExample> = (args) => (
  <Decorators
    newComponent={<_BasicExample />}
    defaultComponent={<_BasicExample />}
  />
);
