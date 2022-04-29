import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-link--default&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=NewDefault] .chakra-link")
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("_gray.12")}`
      )
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=NewDefault] .chakra-link")
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("_grayDark.12")}`
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
  });
});
