import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-skeleton--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    const animation =
      "0.8s linear 0s infinite alternate none running animation-12xlxsq";
    cy.get("[data-testid=NewDefault] .chakra-skeleton")
      .eq(0)
      .should("have.css", "animation", animation);
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const animation =
      "0.8s linear 0s infinite alternate none running animation-t2xdlo";
    cy.get("[data-testid=NewDefault] .chakra-skeleton")
      .eq(0)
      .should("have.css", "animation", animation);
  });
});
