import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-popover--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=NewDefault] #popover-trigger-2").click();
    cy.get("[data-testid=NewDefault] .chakra-popover__content").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.1")
    );
    cy.get("[data-testid=NewDefault] .chakra-popover__arrow").should(
      "have.css",
      "box-shadow",
      `${getRgbFromThemeColor("_gray.4")} 1px -1px 1px 0px`
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    cy.get("[data-testid=NewDefault] #popover-trigger-2").click();

    cy.get("[data-testid=NewDefault] .chakra-popover__content").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.1")
    );
    cy.get("[data-testid=NewDefault] .chakra-popover__arrow").should(
      "have.css",
      "box-shadow",
      `${getRgbFromThemeColor("_grayDark.4")} 1px -1px 1px 0px`
    );
  });
});
