import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-drawer--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    // open the overlay
    cy.contains("Open New").click();

    // test the overlay
    const _grayA10 = "rgba(0, 16, 27, 0.506)";
    const overlay = cy.get(".chakra-modal__overlay");
    overlay.should("have.css", "background-color", _grayA10);

    // test the drawer
    const drawer = cy.get(".chakra-modal__content");
    drawer.should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.1")
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // open the overlay
    cy.contains("Open New").click();

    // test the overlay
    const _grayA10 = "rgba(0, 16, 27, 0.506)";
    const overlay = cy.get(".chakra-modal__overlay");
    overlay.should("have.css", "background-color", _grayA10);

    // test the drawer
    const drawer = cy.get(".chakra-modal__content");
    drawer.should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.1")
    );
  });
});
