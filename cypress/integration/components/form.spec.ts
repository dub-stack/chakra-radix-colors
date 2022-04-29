import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-form--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    // test the required indicator
    cy.get("[data-testid=NewDefault] .chakra-form__required-indicator").should(
      "have.css",
      "color",
      getRgbFromThemeColor("red.9")
    );

    // test the helper text
    cy.get("[data-testid=NewDefault] .chakra-form__helper-text").should(
      "have.css",
      "color",
      getRgbFromThemeColor("_gray.9")
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // test the required indicator
    cy.get("[data-testid=NewDefault] .chakra-form__required-indicator").should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.9")
    );

    // test the helper text
    cy.get("[data-testid=NewDefault] .chakra-form__helper-text").should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.9")
    );
  });
});
