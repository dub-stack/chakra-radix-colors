import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-select--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=NewDefault] .chakra-select").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.3")
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=NewDefault] .chakra-select").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.3")
    );
  });
});
