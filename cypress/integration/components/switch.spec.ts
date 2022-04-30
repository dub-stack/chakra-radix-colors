import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-switch--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getSwitches = () => cy.get("[data-testid=NewDefault] .chakra-switch");

    // test normal un-switched
    getSwitches()
      .eq(0)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.7")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test normal checked
    getSwitches()
      .eq(1)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("blue.9")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled un-switched
    getSwitches()
      .eq(2)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("_gray.7")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled checked
    getSwitches()
      .eq(3)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("blue.9")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getSwitches = () => cy.get("[data-testid=NewDefault] .chakra-switch");

    // test normal un-switched
    getSwitches()
      .eq(0)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.7")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test normal checked
    getSwitches()
      .eq(1)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("blueDark.9")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled un-switched
    getSwitches()
      .eq(2)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("_grayDark.7")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled checked
    getSwitches()
      .eq(3)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("blueDark.9")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });
  });

  it("displays dark color in light mode correctly", () => {
    const getSwitches = () => cy.get("[data-testid=NewDefault] .chakra-switch");

    // test normal un-switched
    getSwitches()
      .eq(4)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_grayDark.7")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test normal checked
    getSwitches()
      .eq(5)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("blueDark.9")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled un-switched
    getSwitches()
      .eq(6)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("_grayDark.7")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled checked
    getSwitches()
      .eq(7)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("blueDark.9")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getSwitches = () => cy.get("[data-testid=NewDefault] .chakra-switch");

    // test normal un-switched
    getSwitches()
      .eq(4)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("_gray.7")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test normal checked
    getSwitches()
      .eq(5)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track").should(
          "have.css",
          "background-color",
          getRgbFromThemeColor("blue.9")
        );

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled un-switched
    getSwitches()
      .eq(6)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("_gray.7")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });

    // test disabled checked
    getSwitches()
      .eq(7)
      .within(() => {
        // test track
        cy.get(".chakra-switch__track")
          .should(
            "have.css",
            "background-color",
            getRgbFromThemeColor("blue.9")
          )
          .should("have.css", "opacity", "0.4");

        // test thumb
        cy.get(".chakra-switch__thumb").should(
          "have.css",
          "background-color",
          "rgb(255, 255, 255)"
        );
      });
  });
});
