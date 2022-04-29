import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-menu--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=NewDefault] .chakra-menu__menu-button").click();

    // test the container
    cy.get("[data-testid=NewDefault] .chakra-menu__menu-list").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.1")
    );

    // test the group title
    cy.get("[data-testid=NewDefault] .chakra-menu__group__title")
      .eq(0)
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
      .should("have.css", "font-weight", "600");

    // test the menu item
    cy.get("[data-testid=NewDefault] .chakra-menu__menuitem")
      .eq(0)
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"))
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    cy.get("[data-testid=NewDefault] .chakra-menu__menu-button").click();

    // test the container
    cy.get("[data-testid=NewDefault] .chakra-menu__menu-list").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.1")
    );

    // test the group title
    cy.get("[data-testid=NewDefault] .chakra-menu__group__title")
      .eq(0)
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"))
      .should("have.css", "font-weight", "600");

    // test the menu item
    cy.get("[data-testid=NewDefault] .chakra-menu__menuitem")
      .eq(0)
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"))
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      )
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );
  });
});
