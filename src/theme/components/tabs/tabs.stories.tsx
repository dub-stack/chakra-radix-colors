import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const _Line = () => (
  <Tabs variant="line">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export const Line: ComponentStory<typeof _Line> = (args) => (
  <Decorators newComponent={<_Line />} oldComponent={<_Line />} />
);

const _Enclosed = () => (
  <Tabs variant="enclosed">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export const Enclosed: ComponentStory<typeof _Enclosed> = (args) => (
  <Decorators newComponent={<_Enclosed />} oldComponent={<_Enclosed />} />
);

const _EnclosedColored = () => (
  <Tabs variant="enclosed-colored">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export const EnclosedColored: ComponentStory<typeof _EnclosedColored> = (
  args
) => (
  <Decorators
    newComponent={<_EnclosedColored />}
    oldComponent={<_EnclosedColored />}
  />
);

const _SoftRounded = () => (
  <Tabs variant="soft-rounded">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export const SoftRounded: ComponentStory<typeof _SoftRounded> = (args) => (
  <Decorators newComponent={<_SoftRounded />} oldComponent={<_SoftRounded />} />
);

const _SolidRounded = () => (
  <Tabs variant="solid-rounded">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
export const SolidRounded: ComponentStory<typeof _SolidRounded> = (args) => (
  <Decorators
    newComponent={<_SolidRounded />}
    oldComponent={<_SolidRounded />}
  />
);
