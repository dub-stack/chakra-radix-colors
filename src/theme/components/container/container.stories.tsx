import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const _Basic = () => (
  <Container maxWidth="md">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </Container>
);
export const Basic: ComponentStory<typeof _Basic> = (args) => {
  return <Decorators newComponent={<_Basic />} oldComponent={<_Basic />} />;
};
