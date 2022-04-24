import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Solid Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--solid-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("red.9"))
      .should("have.css", "color", getRgbFromThemeColor("gray.1"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("redDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("redDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("red.9"))
      .should("have.css", "color", getRgbFromThemeColor("gray.1"));
  });
});

describe.only("Subtle Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--subtle-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });
});
