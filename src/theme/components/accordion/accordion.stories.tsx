import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  chakra,
  AccordionIcon,
  AccordionPanel,
  AccordionProps,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const AccordionComponent = (props: AccordionProps) => (
  <Accordion {...props}>
    <AccordionItem>
      <h2>
        <AccordionButton data-testid="accordion-button-1">
          <chakra.div flex="1" textAlign="left">
            Section 1 title
          </chakra.div>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>Panel 1</AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <chakra.div flex="1" textAlign="left">
            Section 2 title
          </chakra.div>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>Panel 2</AccordionPanel>
    </AccordionItem>
  </Accordion>
);

const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <Decorators
      newComponent={<AccordionComponent data-testid="accordion" />}
      oldComponent={<AccordionComponent />}
    />
  );
};

export const Primary = Template.bind({});
