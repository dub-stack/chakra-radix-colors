import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tag--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    const getStacks = () =>
      cy.get("[data-testid=NewDefault] [data-testid=stack-o-stacks]");

    // test subtle
    getStacks()
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should("have.css", "background-color", getRgbFromThemeColor("teal.4"));

    // test solid
    getStacks()
      .children()
      .eq(1)
      .children()
      .eq(0)
      .should("have.css", "background-color", getRgbFromThemeColor("teal.9"));

    // test outline
    getStacks()
      .children()
      .eq(2)
      .children()
      .eq(0)
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("teal.9")} 0px 0px 0px 1px inset`
      );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getStacks = () =>
      cy.get("[data-testid=NewDefault] [data-testid=stack-o-stacks]");

    // test subtle
    getStacks()
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("tealDark.4")
      );

    // test solid
    getStacks()
      .children()
      .eq(1)
      .children()
      .eq(0)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("tealDark.9")
      );

    // test outline
    getStacks()
      .children()
      .eq(2)
      .children()
      .eq(0)
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("tealDark.9")} 0px 0px 0px 1px inset`
      );
  });
});
