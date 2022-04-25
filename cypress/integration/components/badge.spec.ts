import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Solid Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-badge--solid-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=light-badge-1]")
      .should("have.css", "background-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=light-badge-1]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });

  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=dark-badge-1]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=dark-badge-1]")
      .should("have.css", "background-color", getRgbFromThemeColor("green.9"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"));
  });
});

describe("Subtle Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-badge--subtle-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    // test standard color scheme
    cy.get("[data-testid=light-badge-1]")
      .should("have.css", "background-color", getRgbFromThemeColor("green.4"))
      .should("have.css", "color", getRgbFromThemeColor("green.11"));

    // test _gray color scheme
    cy.get("[data-testid=light-badge-4]")
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // test standard color scheme
    cy.get("[data-testid=light-badge-1]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("greenDark.11"));

    // test _gray color scheme
    cy.get("[data-testid=light-badge-4]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
  });

  it("displays dark color in light mode correctly", () => {
    // test standard color scheme
    cy.get("[data-testid=dark-badge-1]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("greenDark.11"));

    // test _gray color scheme
    cy.get("[data-testid=dark-badge-4]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.12"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    // test standard color scheme
    cy.get("[data-testid=dark-badge-1]")
      .should("have.css", "background-color", getRgbFromThemeColor("green.4"))
      .should("have.css", "color", getRgbFromThemeColor("green.11"));

    // test _gray color scheme
    cy.get("[data-testid=dark-badge-4]")
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"));
  });
});

describe("Outline Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-badge--outline-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=light-badge-1]")
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("green.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("green.9"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=light-badge-1]")
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("greenDark.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("greenDark.9"));
  });

  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=dark-badge-1]")
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("greenDark.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("greenDark.9"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=dark-badge-1]")
      .should(
        "have.css",
        "box-shadow",
        `${getRgbFromThemeColor("green.9")} 0px 0px 0px 1px inset`
      )
      .should("have.css", "color", getRgbFromThemeColor("green.9"));
  });
});

describe("Bright Color", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-badge--bright-color&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=light-badge-1]")
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=light-badge-1]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });

  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=dark-badge-1]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=dark-badge-1]")
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"))
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.1"));
  });
});
