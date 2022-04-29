import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-accordion--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    // test the item
    cy.get("[data-testid=NewDefault] .chakra-accordion__item")
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test the button
    cy.get("[data-testid=accordion-button]")
      .realHover()
      .wait(200) // wait for color transition to complete
      .should("have.css", "background-color", "rgba(0, 0, 0, 0.047)")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // test the item
    cy.get("[data-testid=NewDefault] .chakra-accordion__item")
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test the button
    cy.get("[data-testid=accordion-button]")
      .realHover()
      .wait(200) // wait for color transition to complete
      .should("have.css", "background-color", "rgba(255, 255, 255, 0.035)")
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
  });
});
