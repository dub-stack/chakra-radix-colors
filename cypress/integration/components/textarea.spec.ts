import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-textarea--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    const getTestareas = () =>
      cy
        .get("[data-testid=NewDefault] [data-testid=textarea-stack]")
        .children();

    // test the outline variant
    getTestareas()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test the flushed variant
    getTestareas()
      .eq(1)
      .should(
        "have.css",
        "border-bottom-color",
        getRgbFromThemeColor("_gray.6")
      );

    // test the filled variant
    getTestareas()
      .eq(2)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTestareas = () =>
      cy
        .get("[data-testid=NewDefault] [data-testid=textarea-stack]")
        .children();

    // test the outline variant
    getTestareas()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test the flushed variant
    getTestareas()
      .eq(1)
      .should(
        "have.css",
        "border-bottom-color",
        getRgbFromThemeColor("_grayDark.6")
      );

    // test the filled variant
    getTestareas()
      .eq(2)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      );
  });
});
