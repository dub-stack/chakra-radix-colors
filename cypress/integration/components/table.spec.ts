import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Simple Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-table--simple&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTable = () =>
      cy.get("[data-testid=NewSimple] [data-testid=light-table]");

    getTable().within(() => {
      // test th
      cy.get("th")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_gray.11"))
        .should("have.css", "border-color", getRgbFromThemeColor("purple.6"));

      // test td
      cy.get("td")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
        .should("have.css", "border-color", getRgbFromThemeColor("purple.6"));

      // test caption
      cy.get("caption").should(
        "have.css",
        "color",
        getRgbFromThemeColor("_gray.11")
      );
    });
  });

  it("displays light color in dar mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTable = () =>
      cy.get("[data-testid=NewSimple] [data-testid=light-table]");

    getTable().within(() => {
      // test th
      cy.get("th")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_grayDark.11"))
        .should(
          "have.css",
          "border-color",
          getRgbFromThemeColor("purpleDark.6")
        );

      // test td
      cy.get("td")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"))
        .should(
          "have.css",
          "border-color",
          getRgbFromThemeColor("purpleDark.6")
        );

      // test caption
      cy.get("caption").should(
        "have.css",
        "color",
        getRgbFromThemeColor("_grayDark.11")
      );
    });
  });

  it("displays dark color in light mode correctly", () => {
    const getTable = () =>
      cy.get("[data-testid=NewSimple] [data-testid=dark-table]");

    getTable().within(() => {
      // test th
      cy.get("th")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_grayDark.11"))
        .should(
          "have.css",
          "border-color",
          getRgbFromThemeColor("purpleDark.6")
        );

      // test td
      cy.get("td")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"))
        .should(
          "have.css",
          "border-color",
          getRgbFromThemeColor("purpleDark.6")
        );

      // test caption
      cy.get("caption").should(
        "have.css",
        "color",
        getRgbFromThemeColor("_grayDark.11")
      );
    });
  });

  it("displays dark color in dar mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTable = () =>
      cy.get("[data-testid=NewSimple] [data-testid=dark-table]");

    getTable().within(() => {
      // test th
      cy.get("th")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_gray.11"))
        .should("have.css", "border-color", getRgbFromThemeColor("purple.6"));

      // test td
      cy.get("td")
        .eq(0)
        .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
        .should("have.css", "border-color", getRgbFromThemeColor("purple.6"));

      // test caption
      cy.get("caption").should(
        "have.css",
        "color",
        getRgbFromThemeColor("_gray.11")
      );
    });
  });
});
