import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const _GroupWithStack = () => {
  return (
    <VStack>
      <RadioGroup defaultValue="Option 1" onChange={console.log}>
        <Stack>
          <Radio value="Option 1">Option 1</Radio>
          <Radio value="Option 2">Option 2</Radio>
          <Radio value="Option 3" isDisabled>
            Option 3
          </Radio>
          <Radio value="Option 4" isReadOnly>
            Option 4
          </Radio>
        </Stack>
      </RadioGroup>
      <Stack>
        <Radio value="Option 1" isChecked isReadOnly>
          Option 1
        </Radio>
      </Stack>
    </VStack>
  );
};

export const GroupWithStack: ComponentStory<typeof _GroupWithStack> = (
  args
) => {
  return (
    <Decorators
      newComponent={<_GroupWithStack />}
      defaultComponent={<_GroupWithStack />}
    />
  );
};
