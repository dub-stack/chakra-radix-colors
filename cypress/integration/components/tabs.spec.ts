import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Line Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tabs--line-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewLineVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "border-color", getRgbFromThemeColor("blue.11"))
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .realMouseUp();

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_gray.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewLineVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should("have.css", "border-color", getRgbFromThemeColor("blueDark.11"))
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .realMouseUp();

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_grayDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewLineVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should("have.css", "border-color", getRgbFromThemeColor("blueDark.11"))
      .realMouseDown()
      .wait(200)
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.4")
      )
      .realMouseUp();

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_grayDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewLineVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "border-color", getRgbFromThemeColor("blue.11"))
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.4"))
      .realMouseUp();

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_gray.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });
});

describe("Enclosed Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tabs--enclosed-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should(
        "have.css",
        "border-bottom-color",
        getRgbFromThemeColor("_gray.1")
      );

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_gray.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should(
        "have.css",
        "border-bottom-color",
        getRgbFromThemeColor("_grayDark.1")
      );

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_grayDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should(
        "have.css",
        "border-bottom-color",
        getRgbFromThemeColor("_grayDark.1")
      );

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_grayDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should(
        "have.css",
        "border-bottom-color",
        getRgbFromThemeColor("_gray.1")
      );

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_gray.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });
});

describe("Enclosed Colored Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tabs--enclosed-colored-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedColoredVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "border-top-color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "background-color", getRgbFromThemeColor("blue.2"));

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive
      .should("have.css", "color", getRgbFromThemeColor("_gray.11"))
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.2"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedColoredVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(0)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should(
        "have.css",
        "border-top-color",
        getRgbFromThemeColor("blueDark.11")
      )
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.2")
      );

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.11"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.2")
      );

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedColoredVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_grayDark.6"));

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should(
        "have.css",
        "border-top-color",
        getRgbFromThemeColor("blueDark.11")
      )
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.2")
      );

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive
      .should("have.css", "color", getRgbFromThemeColor("_grayDark.11"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("_grayDark.2")
      );

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewEnclosedColoredVariant] .chakra-tabs__tablist");

    // test tablist
    getTablist()
      .eq(1)
      .should("have.css", "border-color", getRgbFromThemeColor("_gray.6"));

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "border-top-color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "background-color", getRgbFromThemeColor("blue.2"));

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive
      .should("have.css", "color", getRgbFromThemeColor("_gray.11"))
      .should("have.css", "background-color", getRgbFromThemeColor("_gray.2"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });
});

describe("Soft Rounded Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tabs--soft-rounded-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewSoftRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "background-color", getRgbFromThemeColor("blue.4"));

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_gray.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewSoftRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.4")
      );

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_grayDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewSoftRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blueDark.11"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.4")
      );

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_grayDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewSoftRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("blue.11"))
      .should("have.css", "background-color", getRgbFromThemeColor("blue.4"));

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("_gray.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });
});

describe("Solid Rounded Variant", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tabs--solid-rounded-variant&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewSolidRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .should("have.css", "background-color", getRgbFromThemeColor("blue.9"));

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("blue.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewSolidRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.9")
      );

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("blueDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewSolidRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("blueDark.9")
      );

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("blueDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewSolidRoundedVariant] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.1"))
      .should("have.css", "background-color", getRgbFromThemeColor("blue.9"));

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("blue.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });
});

describe.only("Bright Color", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-tabs--bright-color&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").realHover().click(); // Important! Need to .realHover() to remove the hover state from prior tests.
  });

  it("displays light color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewBrightColor] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"));

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("lime.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays light color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewBrightColor] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(0).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"));

    // test inactive tab
    const inactive = getTablist().eq(0).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("limeDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(0).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in light mode correctly", () => {
    const getTablist = () =>
      cy.get("[data-testid=NewBrightColor] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
      .should(
        "have.css",
        "background-color",
        getRgbFromThemeColor("limeDark.9")
      );

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("limeDark.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });

  it("displays dark color in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getTablist = () =>
      cy.get("[data-testid=NewBrightColor] .chakra-tabs__tablist");

    // test active tab
    const active = getTablist().eq(1).children().eq(0);
    active
      .should("have.css", "color", getRgbFromThemeColor("_gray.12"))
      .should("have.css", "background-color", getRgbFromThemeColor("lime.9"));

    // test inactive tab
    const inactive = getTablist().eq(1).children().eq(1);
    inactive.should("have.css", "color", getRgbFromThemeColor("lime.11"));

    // test disabled tab
    const disabled = getTablist().eq(1).children().eq(2);
    disabled.should("have.css", "opacity", "0.4");
  });
});
