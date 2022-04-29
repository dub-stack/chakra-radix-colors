import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-checkbox--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewDefault] [data-testid=light-checkboxes] .chakra-checkbox__control"
      );

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should("have.css", "background-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("green.10"))
      .should("have.css", "border-color", getRgbFromThemeColor("green.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should("have.css", "background-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should("have.css", "border-color", getRgbFromThemeColor("red.9"));
  });

  it("displays light color in dark mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewDefault] [data-testid=light-checkboxes] .chakra-checkbox__control"
      );
    cy.get("#switch-color-mode").click();

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("greenDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.10")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("greenDark.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("greenDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.3"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.9")
    );
  });

  it("displays dark color in light mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewDefault] [data-testid=dark-checkboxes] .chakra-checkbox__control"
      );

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("greenDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.10")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("greenDark.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("greenDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.3"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.9")
    );
  });

  it("displays dark color in dark mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewDefault] [data-testid=dark-checkboxes] .chakra-checkbox__control"
      );
    cy.get("#switch-color-mode").click();

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should("have.css", "background-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("green.10"))
      .should("have.css", "border-color", getRgbFromThemeColor("green.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should("have.css", "background-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should("have.css", "border-color", getRgbFromThemeColor("red.9"));
  });
});

describe("Bright Color", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-checkbox--bright-color&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewBrightColor] [data-testid=light-checkboxes] .chakra-checkbox__control"
      );

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"))
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("lime.10"))
      .should("have.css", "border-color", getRgbFromThemeColor("lime.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should("have.css", "border-color", getRgbFromThemeColor("red.9"));
  });

  it("displays light color in dark mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewBrightColor] [data-testid=light-checkboxes] .chakra-checkbox__control"
      );
    cy.get("#switch-color-mode").click();

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("limeDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"))
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.10")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("limeDark.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.4"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("limeDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.3"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.9")
    );
  });

  it("displays dark color in light mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewBrightColor] [data-testid=dark-checkboxes] .chakra-checkbox__control"
      );

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("limeDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"))
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.10")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("limeDark.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.4"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("limeDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.3")
      )
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.3"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.9")
    );
  });

  it("displays dark color in dark mode correctly", () => {
    const getCheckboxes = () =>
      cy.get(
        "[data-testid=NewBrightColor] [data-testid=dark-checkboxes] .chakra-checkbox__control"
      );
    cy.get("#switch-color-mode").click();

    // test the checked state
    const checked = getCheckboxes().eq(0);
    checked
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"))
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("lime.10"))
      .should("have.css", "border-color", getRgbFromThemeColor("lime.10"));

    // test the checked-disabled state
    const checkedDisabled = getCheckboxes().eq(1);
    checkedDisabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.9"));

    // test the indeterminate state
    const indeterminate = getCheckboxes().eq(2);
    indeterminate
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "border-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the disabled state
    const disabled = getCheckboxes().eq(3);
    disabled
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.3"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));

    // test the invalid state
    const invalid = getCheckboxes().eq(4);
    invalid.should("have.css", "border-color", getRgbFromThemeColor("red.9"));
  });
});
