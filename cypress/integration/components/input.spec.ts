import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Filled Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-input--filled-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
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

  it("displays dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getInputs = () => cy.get("[data-testid=NewFilledVariant] input");

    // test addon
    cy.get("[data-testid=NewFilledVariant] .chakra-input__left-addon").should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.3")
    );

    // test the normal state
    const normal = getInputs().eq(0);
    normal
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      )
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .focus()
      .should("have.css", "border-color", getRgbFromThemeColor("blueDark.9"));

    // test the readonly state
    const readonly = getInputs().eq(1);
    readonly.should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("_grayDark.3")
    );

    // test the disabled state
    const disabled = getInputs().eq(2);
    disabled.should("have.css", "opacity", "0.4");

    // test the invalid state
    const invalid = getInputs().eq(3);
    invalid.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.9")
    );
  });
});
