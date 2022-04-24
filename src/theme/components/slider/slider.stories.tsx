import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const _SliderBug = () => {
  return (
    <Slider
      defaultValue={10}
      min={0}
      max={60}
      step={5}
      onChangeStart={console.log}
      onChangeEnd={console.log}
    >
      <SliderTrack>
        <SliderFilledTrack bg="pink" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};
export const SliderBug: ComponentStory<typeof _SliderBug> = (args) => (
  <Decorators newComponent={<_SliderBug />} oldComponent={<_SliderBug />} />
);

const _Disabled = () => {
  return (
    <Slider
      defaultValue={10}
      min={0}
      max={60}
      step={5}
      onChangeStart={console.log}
      onChangeEnd={console.log}
      isDisabled
    >
      <SliderTrack>
        <SliderFilledTrack bg="pink" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};
export const Disabled: ComponentStory<typeof _Disabled> = (args) => (
  <Decorators newComponent={<_Disabled />} oldComponent={<_Disabled />} />
);
