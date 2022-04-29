import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-modal--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    const _grayA10 = "rgba(0, 16, 27, 0.506)";

    cy.contains("New Open").click();

    cy.get(".chakra-modal__content").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.1")
    );

    cy.get(".chakra-modal__overlay").should(
      "have.css",
      "background-color",
      _grayA10
    );
  });

  it("displays in dark mode correctly", () => {
    const _grayA10 = "rgba(0, 16, 27, 0.506)";

    cy.get("#switch-color-mode").click();

    cy.contains("New Open").click();

    cy.get(".chakra-modal__content").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.1")
    );

    cy.get(".chakra-modal__overlay").should(
      "have.css",
      "background-color",
      _grayA10
    );
  });
});
