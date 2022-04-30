import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  StackProps,
  Box,
  Text,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";
import { useThemedColor } from "util/helpers";

export default {
  title: "Components / Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const NewLineVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Tabs colorScheme="blue" variant="line">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Tabs colorScheme="blueDark" variant="line">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

const OldLineVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <Tabs colorScheme="blue" variant="line">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <Tabs colorScheme="blue" variant="line">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export const LineVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewLineVariant data-testid="NewLineVariant" />}
    oldComponent={<OldLineVariant data-testid="OldLineVariant" />}
  />
);

const NewEnclosedVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Tabs colorScheme="blue" variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Tabs colorScheme="blueDark" variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

const OldEnclosedVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <Tabs colorScheme="blue" variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <Tabs colorScheme="blue" variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export const EnclosedVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewEnclosedVariant data-testid="NewEnclosedVariant" />}
    oldComponent={<OldEnclosedVariant data-testid="OldEnclosedVariant" />}
  />
);

const NewEnclosedColoredVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Tabs colorScheme="blue" variant="enclosed-colored">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Tabs colorScheme="blueDark" variant="enclosed-colored">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

const OldEnclosedColoredVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <Tabs colorScheme="blue" variant="enclosed-colored">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <Tabs colorScheme="blue" variant="enclosed-colored">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export const EnclosedColoredVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={
      <NewEnclosedColoredVariant data-testid="NewEnclosedColoredVariant" />
    }
    oldComponent={
      <OldEnclosedColoredVariant data-testid="OldEnclosedColoredVariant" />
    }
  />
);

const NewSoftRoundedVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Tabs colorScheme="blue" variant="soft-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Tabs colorScheme="blueDark" variant="soft-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

const OldSoftRoundedVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <Tabs colorScheme="blue" variant="soft-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <Tabs colorScheme="blue" variant="soft-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export const SoftRoundedVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewSoftRoundedVariant data-testid="NewSoftRoundedVariant" />}
    oldComponent={<OldSoftRoundedVariant data-testid="OldSoftRoundedVariant" />}
  />
);

const NewSolidRoundedVariant = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Tabs colorScheme="blue" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Tabs colorScheme="blueDark" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

const OldSolidRoundedVariant = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <Tabs colorScheme="blue" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <Tabs colorScheme="blue" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export const SolidRoundedVariant: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={
      <NewSolidRoundedVariant data-testid="NewSolidRoundedVariant" />
    }
    oldComponent={
      <OldSolidRoundedVariant data-testid="OldSolidRoundedVariant" />
    }
  />
);

const NewBrightColor = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box bg={c("_gray.1")} p="4">
        <Tabs colorScheme="lime" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box bg={c("_grayDark.1")} p="4">
        <Tabs colorScheme="limeDark" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

const OldBrightColor = (props: StackProps) => {
  return (
    <VStack {...props}>
      {/* display the light version in light mode */}
      <Text as="h1" fontWeight="bold">
        Old Theme
      </Text>
      <Box p="4">
        <Tabs colorScheme="yellow" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* display the dark version in light mode */}
      <Box p="4" visibility="hidden">
        <Tabs colorScheme="yellow" variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab isDisabled>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export const BrightColor: ComponentStory<typeof VStack> = (args) => (
  <Decorators
    newComponent={<NewBrightColor data-testid="NewBrightColor" />}
    oldComponent={<OldBrightColor data-testid="OldBrightColor" />}
  />
);
