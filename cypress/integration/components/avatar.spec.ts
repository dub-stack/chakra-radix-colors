import { getRgbFromThemeColor, getRgbFromHex } from "util/cypress-utils";
import { randomColor } from "@chakra-ui/theme-tools";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-avatar--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    // test the avatar-with-badge
    cy.get("[data-testid=avatar-with-badge]")
      .should(
        "have.css",
        "background-color",
        getRgbFromHex(randomColor({ string: "Kent Dodds" }))
      )
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.1"));

    // test badge border
    cy.get("[data-testid=avatar-with-badge] .chakra-avatar__badge").should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("_gray.1")
    );

    // test the avatar-no-name
    cy.get("[data-testid=avatar-no-name]")
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.11"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.1"));

    // test the excess label
    cy.get("[data-testid=NewDefault] .chakra-avatar__excess").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.4")
    );
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // test the avatar-with-badge
    cy.get("[data-testid=avatar-with-badge]")
      .should(
        "have.css",
        "background-color",
        getRgbFromHex(randomColor({ string: "Kent Dodds" }))
      )
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.1"));

    // test badge border
    cy.get("[data-testid=avatar-with-badge] .chakra-avatar__badge").should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("_grayDark.1")
    );

    // test the avatar-no-name
    cy.get("[data-testid=avatar-no-name]")
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.11"))
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.1"));

    // test the excess label
    cy.get("[data-testid=NewDefault] .chakra-avatar__excess").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.4")
    );
  });
});
