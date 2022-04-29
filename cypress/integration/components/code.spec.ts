import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-code--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getCodes = () =>
      cy.get("[data-testid=NewDefault] [data-testid=light-code] .chakra-code");

    // test the subtle
    const subtleGray = getCodes().eq(0);
    subtleGray
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));

    // test the solid
    const solidBright = getCodes().eq(1);
    solidBright
      .should("have.css", "background-color", getRgbFromThemeColor("amber.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the outline
    const outlinePurple = getCodes().eq(2);
    outlinePurple
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("purple.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("purple.9"));
  });

  it("displays light color in dark mode correctly", () => {
    const getCodes = () =>
      cy.get("[data-testid=NewDefault] [data-testid=light-code] .chakra-code");
    cy.get("#switch-color-mode").click();

    // test the subtle
    const subtleGray = getCodes().eq(0);
    subtleGray
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));

    // test the solid
    const solidBright = getCodes().eq(1);
    solidBright
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("amberDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the outline
    const outlinePurple = getCodes().eq(2);
    outlinePurple
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("purpleDark.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("purpleDark.9"));
  });

  it("displays dark color in light mode correctly", () => {
    const getCodes = () =>
      cy.get("[data-testid=NewDefault] [data-testid=dark-code] .chakra-code");

    // test the subtle
    const subtleGray = getCodes().eq(0);
    subtleGray
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));

    // test the solid
    const solidBright = getCodes().eq(1);
    solidBright
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("amberDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the outline
    const outlinePurple = getCodes().eq(2);
    outlinePurple
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("purpleDark.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("purpleDark.9"));
  });

  it("displays dark color in dark mode correctly", () => {
    const getCodes = () =>
      cy.get("[data-testid=NewDefault] [data-testid=dark-code] .chakra-code");
    cy.get("#switch-color-mode").click();

    // test the subtle
    const subtleGray = getCodes().eq(0);
    subtleGray
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));

    // test the solid
    const solidBright = getCodes().eq(1);
    solidBright
      .should("have.css", "background-color", getRgbFromThemeColor("amber.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the outline
    const outlinePurple = getCodes().eq(2);
    outlinePurple
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("purple.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("purple.9"));
  });
});
