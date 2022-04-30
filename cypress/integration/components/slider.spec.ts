import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-slider--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getSliders = () => cy.get("[data-testid=NewDefault] .chakra-slider");

    // test normal slider
    getSliders()
      .eq(0)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_gray.12")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.3")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purple.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.1")
        );
      });

    // test disabled slider
    getSliders()
      .eq(1)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_gray.12")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.4")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purple.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.3")
        );
      });
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getSliders = () => cy.get("[data-testid=NewDefault] .chakra-slider");

    // test normal slider
    getSliders()
      .eq(0)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_grayDark.12")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.3")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purpleDark.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.4")
        );
      });

    // test disabled slider
    getSliders()
      .eq(1)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_grayDark.12")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.4")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purpleDark.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.5")
        );
      });
  });

  it("displays dark color in light mode correctly", () => {
    const getSliders = () => cy.get("[data-testid=NewDefault] .chakra-slider");

    // test normal slider
    getSliders()
      .eq(2)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_gray.1")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.3")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purpleDark.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.4")
        );
      });

    // test disabled slider
    getSliders()
      .eq(3)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_gray.1")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.4")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purpleDark.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.5")
        );
      });
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getSliders = () => cy.get("[data-testid=NewDefault] .chakra-slider");

    // test normal slider
    getSliders()
      .eq(2)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_grayDark.1")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.3")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purple.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.1")
        );
      });

    // test disabled slider
    getSliders()
      .eq(3)
      .within(() => {
        // test marker
        cy.get(".chakra-slider__marker").should(
          "have.css",
          "color",
          getRgbFromThemeColor("_grayDark.1")
        );

        // test track
        cy.get(".chakra-slider__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.4")
        );

        // test filled track
        cy.get(".chakra-slider__filled-track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("purple.9")
        );

        // test thumb
        cy.get(".chakra-slider__thumb").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.3")
        );
      });
  });
});
