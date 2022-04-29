import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-divider--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=NewDefault] hr")
      .eq(0)
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    cy.get("[data-testid=NewDefault] hr")
      .eq(1)
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=NewDefault] hr")
      .eq(0)
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
    cy.get("[data-testid=NewDefault] hr")
      .eq(1)
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
  });
});
