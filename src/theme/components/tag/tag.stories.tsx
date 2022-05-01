import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Tag,
  TagLeftIcon,
  TagLabel,
  TagRightIcon,
  TagCloseButton,
  HStack,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack data-testid="stack-o-stacks">
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
        </VStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <VStack data-testid="stack-o-stacks">
          <HStack>
            <Tag variant="subtle" colorScheme="tealDark">
              <TagLeftIcon w="12px" h="12px" as={AddIcon} />
              <TagLabel>Green</TagLabel>
            </Tag>
            <Tag variant="subtle" colorScheme="tealDark">
              <TagLabel>Green</TagLabel>
              <TagRightIcon w="12px" h="12px" as={AddIcon} />
            </Tag>
          </HStack>
          <HStack>
            <Tag variant="solid" colorScheme="tealDark">
              <TagLeftIcon w="12px" h="12px" as={AddIcon} />
              <TagLabel>Green</TagLabel>
            </Tag>
            <Tag variant="solid" colorScheme="tealDark">
              <TagLabel>Green</TagLabel>
              <TagRightIcon w="12px" h="12px" as={AddIcon} />
            </Tag>
          </HStack>
          <HStack>
            <Tag variant="outline" colorScheme="tealDark">
              <TagLeftIcon w="12px" h="12px" as={AddIcon} />
              <TagLabel>Green</TagLabel>
            </Tag>
            <Tag variant="outline" colorScheme="tealDark">
              <TagLabel>Green</TagLabel>
              <TagRightIcon w="12px" h="12px" as={AddIcon} />
            </Tag>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <VStack data-testid="stack-o-stacks">
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
        </VStack>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <VStack data-testid="stack-o-stacks">
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
        </VStack>
      </Box>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewDefault data-testid="NewDefault" />}
    oldComponent={<OldDefault data-testid="OldDefault" />}
  />
);
