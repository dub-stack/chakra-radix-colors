import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, CheckboxGroup, HStack, VStack } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const _AllStates = () => {
  return (
    <VStack>
      <HStack>
        <Checkbox colorScheme="_gray">Gray</Checkbox>
        <Checkbox colorScheme="purple">Normal</Checkbox>
        <Checkbox colorScheme="sky">Bright</Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_gray" isDisabled>
          Gray
        </Checkbox>
        <Checkbox colorScheme="purple" isDisabled>
          Normal
        </Checkbox>
        <Checkbox colorScheme="sky" isDisabled isChecked>
          Bright
        </Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_gray" isIndeterminate>
          Gray
        </Checkbox>
        <Checkbox colorScheme="purple" isIndeterminate>
          Normal
        </Checkbox>
        <Checkbox colorScheme="sky" isIndeterminate>
          Bright
        </Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_gray" isInvalid>
          Gray
        </Checkbox>
        <Checkbox colorScheme="purple" isInvalid>
          Normal
        </Checkbox>
        <Checkbox colorScheme="sky" isInvalid>
          Bright
        </Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_grayDark">Gray</Checkbox>
        <Checkbox colorScheme="purpleDark">Normal</Checkbox>
        <Checkbox colorScheme="skyDark">Bright</Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_grayDark" isDisabled>
          Gray
        </Checkbox>
        <Checkbox colorScheme="purpleDark" isDisabled>
          Normal
        </Checkbox>
        <Checkbox colorScheme="skyDark" isDisabled isChecked>
          Bright
        </Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_grayDark" isIndeterminate>
          Gray
        </Checkbox>
        <Checkbox colorScheme="purpleDark" isIndeterminate>
          Normal
        </Checkbox>
        <Checkbox colorScheme="skyDark" isIndeterminate>
          Bright
        </Checkbox>
      </HStack>
      <HStack>
        <Checkbox colorScheme="_grayDark" isInvalid>
          Gray
        </Checkbox>
        <Checkbox colorScheme="purpleDark" isInvalid>
          Normal
        </Checkbox>
        <Checkbox colorScheme="skyDark" isInvalid>
          Bright
        </Checkbox>
      </HStack>
    </VStack>
  );
};
export const AllStates: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <Decorators
      newComponent={<_AllStates />}
      defaultComponent={<_AllStates />}
    />
  );
};
