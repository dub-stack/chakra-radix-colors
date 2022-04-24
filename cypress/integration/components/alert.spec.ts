import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Solid Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--solid-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("red.9"))
      .should("have.css", "color", getRgbFromThemeColor("gray.1"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("redDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("redDark.9"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("red.9"))
      .should("have.css", "color", getRgbFromThemeColor("gray.1"));
  });
});

describe("Subtle Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--subtle-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("green.4"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
    cy.get("[data-testid=AlertLight] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("green.9")
    );
  });
  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertLight]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("gray.1"));
    cy.get("[data-testid=AlertLight] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("greenDark.9")
    );
  });
  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=AlertDark]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("greenDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("gray.1"));
    cy.get("[data-testid=AlertDark] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("greenDark.9")
    );
  });
  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("green.4"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
    cy.get("[data-testid=AlertDark] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("green.9")
    );
  });
});

describe("Left-Accent Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--left-accent-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("blue.4"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"))
      .should(
        "have.css",
        "border-inline-start-color",
        getRgbFromThemeColor("blue.9")
      );
    cy.get("[data-testid=AlertLight] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blue.9")
    );
  });
  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertLight]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("gray.1"))
      .should(
        "have.css",
        "border-inline-start-color",
        getRgbFromThemeColor("blueDark.9")
      );
    cy.get("[data-testid=AlertLight] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blueDark.9")
    );
  });
  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=AlertDark]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("gray.1"))
      .should(
        "have.css",
        "border-inline-start-color",
        getRgbFromThemeColor("blueDark.9")
      );
    cy.get("[data-testid=AlertDark] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blueDark.9")
    );
  });
  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("blue.4"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"))
      .should(
        "have.css",
        "border-inline-start-color",
        getRgbFromThemeColor("blue.9")
      );
    cy.get("[data-testid=AlertDark] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blue.9")
    );
  });
});

describe("Top-Accent Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--top-accent-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("blue.4"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"))
      .should("have.css", "border-top-color", getRgbFromThemeColor("blue.9"));
    cy.get("[data-testid=AlertLight] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blue.9")
    );
  });
  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertLight]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("gray.1"))
      .should(
        "have.css",
        "border-top-color",
        getRgbFromThemeColor("blueDark.9")
      );
    cy.get("[data-testid=AlertLight] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blueDark.9")
    );
  });
  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=AlertDark]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.4")
      )
      .should("have.css", "color", getRgbFromThemeColor("gray.1"))
      .should(
        "have.css",
        "border-top-color",
        getRgbFromThemeColor("blueDark.9")
      );
    cy.get("[data-testid=AlertDark] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blueDark.9")
    );
  });
  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("blue.4"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"))
      .should("have.css", "border-top-color", getRgbFromThemeColor("blue.9"));
    cy.get("[data-testid=AlertDark] .chakra-alert__icon").should(
      "have.css",
      "color",
      getRgbFromThemeColor("blue.9")
    );
  });
});

describe("Bright Color", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-alert--bright-color&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays light color in light mode correctly", () => {
    cy.get("[data-testid=AlertLight]")
      .should("have.css", "background-color", getRgbFromThemeColor("amber.9"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertLight]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("amberDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays dark color in light mode correctly", () => {
    cy.get("[data-testid=AlertDark]")
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("amberDark.9")
      )
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();
    cy.get("[data-testid=AlertDark]")
      .should("have.css", "background-color", getRgbFromThemeColor("amber.9"))
      .should("have.css", "color", getRgbFromThemeColor("grayDark.1"));
  });
});
