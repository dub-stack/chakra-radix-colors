import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container, Divider } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const _Basic = () => (
  <Container p={4} height="300px">
    <Divider />
  </Container>
);
export const Basic: ComponentStory<typeof Divider> = (args) => {
  return <Decorators newComponent={<_Basic />} oldComponent={<_Basic />} />;
};

const _Vertical = () => (
  <Container p={4} height="300px">
    <Divider orientation="vertical" />
  </Container>
);
export const Vertical: ComponentStory<typeof Divider> = (args) => {
  return (
    <Decorators newComponent={<_Vertical />} oldComponent={<_Vertical />} />
  );
};

const _Horizontal = () => (
  <Container p={4} height="300px">
    <Divider orientation="horizontal" />
  </Container>
);
export const Horizontal: ComponentStory<typeof Divider> = (args) => {
  return (
    <Decorators newComponent={<_Horizontal />} oldComponent={<_Horizontal />} />
  );
};

const _DashedVariant = () => (
  <Container p={4} height="300px">
    <Divider orientation="horizontal" variant="dashed" />
  </Container>
);
export const DashedVariant: ComponentStory<typeof Divider> = (args) => {
  return (
    <Decorators
      newComponent={<_DashedVariant />}
      oldComponent={<_DashedVariant />}
    />
  );
};
