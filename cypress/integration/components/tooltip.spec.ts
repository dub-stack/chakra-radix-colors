import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tooltip--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    // open the tooltip
    cy.get("[data-testid=NewDefault]").within(() => {
      cy.contains("Hover me").realHover();
    });

    // test
    cy.contains("This is a chakra tooltip")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.2")
      )
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // open the tooltip
    cy.get("[data-testid=NewDefault]").within(() => {
      cy.contains("Hover me").realHover();
    });

    // test
    cy.contains("This is a chakra tooltip")
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.2"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });
});
