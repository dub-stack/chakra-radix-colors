import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Tag,
  TagLeftIcon,
  TagLabel,
  TagRightIcon,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const _Subtle = () => (
  <HStack>
    <Tag variant="subtle" colorScheme="teal">
      <TagLeftIcon w="12px" h="12px" as={AddIcon} />
      <TagLabel>Green</TagLabel>
    </Tag>
    <Tag variant="subtle" colorScheme="teal">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    </Tag>
  </HStack>
);
export const Subtle: ComponentStory<typeof _Subtle> = (args) => (
  <Decorators newComponent={<_Subtle />} defaultComponent={<_Subtle />} />
);

const _Solid = () => (
  <HStack>
    <Tag variant="solid" colorScheme="teal">
      <TagLeftIcon w="12px" h="12px" as={AddIcon} />
      <TagLabel>Green</TagLabel>
    </Tag>
    <Tag variant="solid" colorScheme="teal">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    </Tag>
  </HStack>
);
export const Solid: ComponentStory<typeof _Solid> = (args) => (
  <Decorators newComponent={<_Solid />} defaultComponent={<_Solid />} />
);

const _Outline = () => (
  <HStack>
    <Tag variant="outline" colorScheme="teal">
      <TagLeftIcon w="12px" h="12px" as={AddIcon} />
      <TagLabel>Green</TagLabel>
    </Tag>
    <Tag variant="outline" colorScheme="teal">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    </Tag>
  </HStack>
);
export const Outline: ComponentStory<typeof _Outline> = (args) => (
  <Decorators newComponent={<_Outline />} defaultComponent={<_Outline />} />
);
