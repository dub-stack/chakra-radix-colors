import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      {/* display the light color in light mode */}
      <Box bg={c("_gray.1")} p="4">
        <VStack w="300px">
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            colorScheme="purple"
          >
            <SliderMark value={30} fontSize="sm">
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            isDisabled
            colorScheme="purple"
          >
            <SliderMark value={30} fontSize="sm">
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </VStack>
      </Box>
      {/* display the light color in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <VStack w="300px">
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            colorScheme="purpleDark"
          >
            <SliderMark value={30} fontSize="sm" color={c("_gray.1")}>
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            isDisabled
            colorScheme="purpleDark"
          >
            <SliderMark value={30} fontSize="sm" color={c("_gray.1")}>
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </VStack>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      {/* display the light color in light mode */}
      <Box p="4">
        <VStack w="300px">
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            colorScheme="purple"
          >
            <SliderMark value={30} fontSize="sm">
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            isDisabled
            colorScheme="purple"
          >
            <SliderMark value={30} fontSize="sm">
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </VStack>
      </Box>
      {/* display the light color in light mode */}
      <Box p="4">
        <VStack w="300px">
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            colorScheme="purple"
          >
            <SliderMark value={30} fontSize="sm">
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Slider
            defaultValue={10}
            min={0}
            max={60}
            step={5}
            isDisabled
            colorScheme="purple"
          >
            <SliderMark value={30} fontSize="sm">
              50%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
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
