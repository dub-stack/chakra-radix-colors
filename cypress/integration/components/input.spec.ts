import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Filled Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-input--filled-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light mode correctly", () => {
    const getInputs = () => cy.get("[data-testid=NewFilledVariant] input");

    // test the normal state
    const normal = getInputs().eq(0);
    normal
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"))
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .focus()
      .should("have.css", "border-color", getRgbFromThemeColor("blue.9"));

    // test the readonly state
    const readonly = getInputs().eq(1);
    readonly.should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_gray.3")
    );

    // test the disabled state
    const disabled = getInputs().eq(2);
    disabled.should("have.css", "opacity", "0.4");

    // test the invalid state
    const invalid = getInputs().eq(3);
    invalid.should("have.css", "border-color", getRgbFromThemeColor("red.9"));
  });
});
