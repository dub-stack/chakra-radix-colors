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
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const _Simple = () => (
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
);

export const Simple: ComponentStory<typeof _Simple> = (args) => {
  return (
    <Decorators newComponent={<_Simple />} defaultComponent={<_Simple />} />
  );
};
