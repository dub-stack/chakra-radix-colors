import React from "react";
import { render, screen } from "util/test-utils";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  chakra,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

test("renders", () => {
  const Scene = () => {
    return (
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
    );
  };
  render(<Scene />);

  // get dom elements
  const accordionButton = screen.getByTestId("accordion-button");
  const resetColorMode = screen.getByTestId("reset-color-mode");

  // reset the color mode
  resetColorMode.click();

  // test when light mode
  expect(accordionButton).toHaveStyleRule(
    "background",
    "var(--chakra-colors-blackA-3)",
    { target: ":hover" }
  );
});
