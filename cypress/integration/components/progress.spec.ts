import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-progress--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode", () => {
    const getProgressbars = () =>
      cy.get("[data-testid=NewDefault] [role=progressbar]");
    const _grayA3 = "rgba(0, 37, 73, 0.055)";
    const linearGradient =
      "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(0);
    solid().parent().should("have.css", "background-color", _grayA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blue.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(1);
    striped().parent().should("have.css", "background-color", _grayA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blue.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    striped().should("have.css", "background-image", linearGradient);
  });

  it("displays light color in dark mode", () => {
    cy.get("#switch-color-mode").click();

    const getProgressbars = () =>
      cy.get("[data-testid=NewDefault] [role=progressbar]");
    const _grayDarkA3 = "rgba(214, 251, 252, 0.06)";
    const linearGradient =
      "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(0);
    solid().parent().should("have.css", "background-color", _grayDarkA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blueDark.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(1);
    striped().parent().should("have.css", "background-color", _grayDarkA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blueDark.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    striped().should("have.css", "background-image", linearGradient);
  });

  it("displays dark color in light mode", () => {
    const getProgressbars = () =>
      cy.get("[data-testid=NewDefault] [role=progressbar]");
    const _grayDarkA3 = "rgba(214, 251, 252, 0.06)";
    const linearGradient =
      "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(2);
    solid().parent().should("have.css", "background-color", _grayDarkA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blueDark.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(3);
    striped().parent().should("have.css", "background-color", _grayDarkA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blueDark.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    striped().should("have.css", "background-image", linearGradient);
  });

  it("displays dark color in light mode", () => {
    cy.get("#switch-color-mode").click();

    const getProgressbars = () =>
      cy.get("[data-testid=NewDefault] [role=progressbar]");
    const _grayA3 = "rgba(0, 37, 73, 0.055)";
    const linearGradient =
      "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(2);
    solid().parent().should("have.css", "background-color", _grayA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blue.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(3);
    striped().parent().should("have.css", "background-color", _grayA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("blue.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    striped().should("have.css", "background-image", linearGradient);
  });
});

describe("Bright Color", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-progress--bright-color&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode", () => {
    const getProgressbars = () =>
      cy.get("[data-testid=NewBrightColor] [role=progressbar]");
    const _grayA3 = "rgba(0, 37, 73, 0.055)";
    const linearGradient =
      "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(0);
    solid().parent().should("have.css", "background-color", _grayA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("sky.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(1);
    striped().parent().should("have.css", "background-color", _grayA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("sky.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    striped().should("have.css", "background-image", linearGradient);
  });

  it("displays light color in dark mode", () => {
    cy.get("#switch-color-mode").click();

    const getProgressbars = () =>
      cy.get("[data-testid=NewBrightColor] [role=progressbar]");
    const _grayDarkA3 = "rgba(214, 251, 252, 0.06)";
    const linearGradient =
      "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(0);
    solid().parent().should("have.css", "background-color", _grayDarkA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("skyDark.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(1);
    striped().parent().should("have.css", "background-color", _grayDarkA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("skyDark.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    striped().should("have.css", "background-image", linearGradient);
  });

  it("displays dark color in light mode", () => {
    const getProgressbars = () =>
      cy.get("[data-testid=NewBrightColor] [role=progressbar]");
    const _grayDarkA3 = "rgba(214, 251, 252, 0.06)";
    const linearGradient =
      "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(2);
    solid().parent().should("have.css", "background-color", _grayDarkA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("skyDark.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(3);
    striped().parent().should("have.css", "background-color", _grayDarkA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("skyDark.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    striped().should("have.css", "background-image", linearGradient);
  });

  it("displays dark color in light mode", () => {
    cy.get("#switch-color-mode").click();

    const getProgressbars = () =>
      cy.get("[data-testid=NewBrightColor] [role=progressbar]");
    const _grayA3 = "rgba(0, 37, 73, 0.055)";
    const linearGradient =
      "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))";

    // test the sold progressbar
    const solid = () => getProgressbars().eq(2);
    solid().parent().should("have.css", "background-color", _grayA3);
    solid().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("sky.9")
    );
    solid()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));

    // test the striped progressbar
    const striped = () => getProgressbars().eq(3);
    striped().parent().should("have.css", "background-color", _grayA3);
    striped().should(
      "have.css",
      "background-color",
      getRgbFromThemeColor("sky.9")
    );
    striped()
      .parent()
      .contains("80%")
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    striped().should("have.css", "background-image", linearGradient);
  });
});
