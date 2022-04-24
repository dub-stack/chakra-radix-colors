describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-accordion--primary&args=&viewMode=story"
    );
  });

  it("displays hover styles", () => {
    cy.get("[data-testid=accordion] [data-testid=accordion-button-1]")
      .realHover()
      .wait(100) // wait for color transition to complete
      .should("have.css", "background-color", "rgba(0, 0, 0, 0.047)");
  });
});
