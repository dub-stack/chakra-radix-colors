import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Code, VStack, Text, Box, StackProps } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Code",
  component: Code,
};

const NewDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <VStack data-testid="light-code">
          <Code>import React from "react"</Code>
          <Code colorScheme="amber" variant="solid">
            import React from "react"
          </Code>
          <Code colorScheme="purple" variant="outline">
            import React from "react"
          </Code>
        </VStack>
      </Box>
      {/* display the light version in dark mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <VStack data-testid="dark-code">
          <Code colorScheme="_grayDark">import React from "react"</Code>
          <Code colorScheme="amberDark" variant="solid">
            import React from "react"
          </Code>
          <Code colorScheme="purpleDark" variant="outline">
            import React from "react"
          </Code>
        </VStack>
      </Box>
    </VStack>
  );
};

const OldDefault = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <VStack data-testid="light-code">
          <Code>import React from "react"</Code>
          <Code colorScheme="yellow" variant="solid">
            import React from "react"
          </Code>
          <Code colorScheme="purple" variant="outline">
            import React from "react"
          </Code>
        </VStack>
      </Box>
      {/* display the light version in dark mode */}
      <Box p="4" visibility="hidden">
        <VStack data-testid="dark-code">
          <Code>import React from "react"</Code>
          <Code colorScheme="yellow" variant="solid">
            import React from "react"
          </Code>
          <Code colorScheme="purple" variant="outline">
            import React from "react"
          </Code>
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
