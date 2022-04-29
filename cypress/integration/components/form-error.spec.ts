import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-formerror--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    // test the error message
    cy.get("[data-testid=NewDefault] .chakra-form__error-message").should(
      "have.css",
      "color",
      getRgbFromThemeColor("red.9")
    );

    // test the error icon
    cy.get("[data-testid=NewDefault] .chakra-form__error-icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("red.9")
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // test the error message
    cy.get("[data-testid=NewDefault] .chakra-form__error-message").should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.9")
    );

    // test the error icon
    cy.get("[data-testid=NewDefault] .chakra-form__error-icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.9")
    );
  });
});
