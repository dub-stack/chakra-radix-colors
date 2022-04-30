import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  usePopover,
  chakra,
  StackProps,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Popover placement="right-start">
          <PopoverTrigger>
            <chakra.button mt="180px">Trigger</chakra.button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              <p>Are you sure you want to have that milkshake?</p>
              <br />
              <button>Yes</button>
              <button>No</button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => (
  <VStack {...props}>
    <Text as="h1" fontWeight="bold">
      Old Theme
    </Text>
    <Box p="4">
      <Popover placement="right-start">
        <PopoverTrigger>
          <chakra.button mt="180px">Trigger</chakra.button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            <p>Are you sure you want to have that milkshake?</p>
            <br />
            <button>Yes</button>
            <button>No</button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  </VStack>
);

export const Default: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewDefault data-testid="NewDefault" />}
    oldComponent={<OldDefault data-testid="OldDefault" />}
  />
);
