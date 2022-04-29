import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-heading--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=NewDefault] .chakra-heading").should(
      "have.css",
      "color",
      getRgbFromThemeColor("_gray.12")
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=NewDefault] .chakra-heading").should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.12")
    );
  });
});
