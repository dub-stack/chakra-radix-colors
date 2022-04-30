import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-radio--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=new-row-1] .chakra-radio__control")
      .eq(0)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));
    cy.get("[data-testid=new-row-1] .chakra-radio__control")
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));
    cy.get("[data-testid=new-row-2] .chakra-radio__control")
      .eq(0)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"));
    cy.get("[data-testid=new-row-2] .chakra-radio__control")
      .eq(1)
      .should("have.css", "background-color", getRgbFromThemeColor("blue.9"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    cy.get("[data-testid=new-row-1] .chakra-radio__control")
      .eq(0)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );
    cy.get("[data-testid=new-row-1] .chakra-radio__control")
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));
    cy.get("[data-testid=new-row-2] .chakra-radio__control")
      .eq(0)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      );
    cy.get("[data-testid=new-row-2] .chakra-radio__control")
      .eq(1)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.9")
      );
  });
});
