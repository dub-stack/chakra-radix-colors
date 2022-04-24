describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-accordion--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    cy.get("[data-testid=accordion-button]")
      .realHover()
      .wait(200) // wait for color transition to complete
      .should("have.css", "background-color", "rgba(0, 0, 0, 0.047)");
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=accordion-button]")
      .realHover()
      .wait(200) // wait for color transition to complete
      .should("have.css", "background-color", "rgba(255, 255, 255, 0.035)");
  });
});
