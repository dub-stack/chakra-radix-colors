import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  useEditable,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  useEditableControls,
  StackProps,
  VStack,
  Box,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Editable",
  component: Editable,
} as ComponentMeta<typeof Editable>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Editable defaultValue="Take some chakra">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Editable defaultValue="Take some chakra">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (props) => (
  <Decorators
    newComponent={<NewDefault data-testid="NewDefault" />}
    oldComponent={<OldDefault data-testid="OldDefault" />}
  />
);
