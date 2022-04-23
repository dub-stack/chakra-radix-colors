import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Progress, ProgressLabel, Container } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const _Basic = () => <Progress value={50} w="full" />;
export const Basic: ComponentStory<typeof _Basic> = (args) => (
  <Container maxW="500px">
    <Decorators newComponent={<_Basic />} defaultComponent={<_Basic />} />
  </Container>
);

const _withColorScheme = () => (
  <Progress colorScheme="pink" value={20} w="full" />
);
export const withColorScheme: ComponentStory<typeof _withColorScheme> = (
  args
) => (
  <Container maxW="500px">
    <Decorators
      newComponent={<_withColorScheme />}
      defaultComponent={<_withColorScheme />}
    />
  </Container>
);

const _withLabel = () => (
  <Progress value={60} w="full">
    <ProgressLabel>60%</ProgressLabel>
  </Progress>
);
export const withLabel: ComponentStory<typeof _withLabel> = (args) => (
  <Decorators newComponent={<_withLabel />} defaultComponent={<_withLabel />} />
);
