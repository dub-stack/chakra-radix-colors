import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  chakra,
  AccordionIcon,
  AccordionPanel,
  StackProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { Decorators } from "util/storybook-utils";

export default {
  title: "Components / Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const NewDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton data-testid="accordion-button">
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
      </Box>
    </VStack>
  );
};
const OldDefault = (props: StackProps) => {
  return (
    <VStack {...props}>
      <Text as="h1" fontWeight="bold">
        New Theme
      </Text>
      <Box p="4">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
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
      </Box>
    </VStack>
  );
};

export const Default: ComponentStory<typeof VStack> = (args) => {
  return (
    <Decorators
      newComponent={<NewDefault data-testid="NewDefault" />}
      oldComponent={<OldDefault data-testid="OldDefault" />}
    />
  );
};
