import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-stat--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    const _2em = "24px";
    cy.get("[data-testid=NewDefault] .chakra-stat__number").should(
      "have.css",
      "font-size",
      _2em
    );
  });

  it("displays in dark mode correctly", () => {
    const _2em = "24px";
    cy.get("[data-testid=NewDefault] .chakra-stat__number").should(
      "have.css",
      "font-size",
      _2em
    );
  });
});
