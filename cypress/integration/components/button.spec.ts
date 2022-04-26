import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Solid Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-button--solid-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewSolidVariant] [data-testid=light-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.5"));
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.6"));

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton
      .should("have.css", "background-color", getRgbFromThemeColor("red.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    normalButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.10"));
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.10"));

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton
      .realHover()
      .should("have.css", "background-color", getRgbFromThemeColor("orange.9"));
  });

  it("displays light color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewSolidVariant] [data-testid=light-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.5")
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.6")
      );

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton
      .should("have.css", "background-color", getRgbFromThemeColor("redDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.10")
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.10")
      );

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton
      .realHover()
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("orangeDark.9")
      );
  });

  it("displays dark color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewSolidVariant] [data-testid=dark-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.5")
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.6")
      );

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton
      .should("have.css", "background-color", getRgbFromThemeColor("redDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.10")
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.10")
      );

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton
      .realHover()
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("orangeDark.9")
      );
  });

  it("displays dark color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewSolidVariant] [data-testid=dark-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.5"));
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.6"));

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton
      .should("have.css", "background-color", getRgbFromThemeColor("red.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
    normalButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.10"));
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.10"));

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton
      .realHover()
      .should("have.css", "background-color", getRgbFromThemeColor("orange.9"));
  });
});

describe("Ghost Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-button--ghost-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewGhostVariant] [data-testid=light-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.5"));

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("red.11"));
    normalButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.4"));
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.5"));
  });

  it("displays light color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewGhostVariant] [data-testid=light-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.12")
    );
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.5")
      );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.11")
    );
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.4")
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.5")
      );
  });

  it("displays dark color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewGhostVariant] [data-testid=dark-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.12")
    );
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.5")
      );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.11")
    );
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.4")
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.5")
      );
  });

  it("displays dark color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewGhostVariant] [data-testid=dark-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.5"));

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("red.11"));
    normalButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.4"));
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.5"));
  });
});

describe("Outline Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-button--outline-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewOutlineVariant] [data-testid=light-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.5"));
    _grayButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("_gray.7")
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("red.11"));
    normalButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.4"));
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.5"));
    normalButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("red.11")
    );
  });

  it("displays light color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewOutlineVariant] [data-testid=light-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.12")
    );
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.5")
      );
    _grayButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("_grayDark.7")
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.11")
    );
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.4")
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.5")
      );
    normalButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.11")
    );
  });

  it("displays dark color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewOutlineVariant] [data-testid=dark-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.12")
    );
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.5")
      );
    _grayButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("_grayDark.7")
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("redDark.11")
    );
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.4")
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("redDark.5")
      );
    normalButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("redDark.11")
    );
  });

  it("displays dark color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewOutlineVariant] [data-testid=dark-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should("have.css", "color", getRgbFromThemeColor("_gray.12"));
    _grayButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"));
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.5"));
    _grayButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("_gray.7")
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("red.11"));
    normalButton
      .realHover()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.4"));
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("red.5"));
    normalButton.should(
      "have.css",
      "border-color",
      getRgbFromThemeColor("red.11")
    );
  });
});

describe("Link Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-button--link-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewLinkVariant] [data-testid=light-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should("have.css", "color", getRgbFromThemeColor("_gray.9"));
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("_gray.9")}`
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("_gray.10"));

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("_gray.9")}`
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("red.9"));
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("red.9")}`
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("red.10"));

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("orange.9")}`
    );
  });

  it("displays light color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewLinkVariant] [data-testid=light-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.9")
    );
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("_grayDark.9")}`
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.10"));

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("_grayDark.9")}`
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("redDark.9"));
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("redDark.9")}`
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("redDark.10"));

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("orangeDark.9")}`
    );
  });

  it("displays dark color in light mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewLinkVariant] [data-testid=dark-color] .chakra-button"
      );

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should(
      "have.css",
      "color",
      getRgbFromThemeColor("_grayDark.9")
    );
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("_grayDark.9")}`
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.10"));

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("_grayDark.9")}`
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("redDark.9"));
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("redDark.9")}`
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("redDark.10"));

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("orangeDark.9")}`
    );
  });

  it("displays dark color in dark mode correctly", () => {
    const getButtonList = () =>
      cy.get(
        "[data-testid=NewLinkVariant] [data-testid=dark-color] .chakra-button"
      );
    cy.get("#switch-color-mode").click();

    // test the _gray button
    const _grayButton = getButtonList().eq(0);
    _grayButton.should("have.css", "color", getRgbFromThemeColor("_gray.9"));
    _grayButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("_gray.9")}`
      );
    _grayButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("_gray.10"));

    // test the _gray-disabled button
    const _grayDisabledButton = getButtonList().eq(1);
    _grayDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("_gray.9")}`
    );

    // test the normal button
    const normalButton = getButtonList().eq(2);
    normalButton.should("have.css", "color", getRgbFromThemeColor("red.9"));
    normalButton
      .realHover()
      .wait(200)
      .should(
        "have.css",
        "text-decoration",
        `underline solid ${getRgbFromThemeColor("red.9")}`
      );
    normalButton
      .realMouseDown()
      .wait(200)
      .should("have.css", "color", getRgbFromThemeColor("red.10"));

    // test the normal-disabled button
    const normalDisabledButton = getButtonList().eq(4);
    normalDisabledButton.should(
      "have.css",
      "text-decoration",
      `none solid ${getRgbFromThemeColor("orange.9")}`
    );
  });
});
