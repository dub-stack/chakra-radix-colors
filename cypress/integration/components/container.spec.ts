describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-container--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays in light mode correctly", () => {
    // no theme changes, but make sure this mounts correctly
    cy.get("[data-testid=NewDefault] .chakra-container");
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // no theme changes, but make sure this mounts correctly
    cy.get("[data-testid=NewDefault] .chakra-container");
  });
});
