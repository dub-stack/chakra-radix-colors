import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-spinner--default&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    const c = getRgbFromThemeColor("_gray.12");
    cy.get("[data-testid=NewDefault] .chakra-spinner").should(
      "have.css",
      "border-color",
      `${c} ${c} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const c = getRgbFromThemeColor("_grayDark.12");
    cy.get("[data-testid=NewDefault] .chakra-spinner").should(
      "have.css",
      "border-color",
      `${c} ${c} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`
    );
  });
});
