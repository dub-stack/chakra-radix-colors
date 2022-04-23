import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Stack,
  Container,
  chakra,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const _Basic = () => (
  <Container maxW="500px">
    <Skeleton h="20px" />{" "}
  </Container>
);
export const Basic: ComponentStory<typeof Skeleton> = (args) => (
  <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />
);

const _Text = () => (
  <Container maxW="500px">
    <SkeletonText
      padding="20px"
      borderWidth="1px"
      borderRadius="lg"
      noOfLines={[3, 4, 5, 6, 7]}
    />
  </Container>
);
export const Text: ComponentStory<typeof Skeleton> = (args) => (
  <Decorators newComponent={<_Text />} defaultComponent={<_Text />} />
);

const _Combined = () => (
  <Container maxW="500px">
    <chakra.div padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </chakra.div>
  </Container>
);
export const Combined: ComponentStory<typeof Skeleton> = (args) => (
  <Decorators newComponent={<_Combined />} defaultComponent={<_Combined />} />
);
