import { getRgbFromThemeColor } from "util/cypress-utils";

describe("Default", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-closebutton--default&args=&viewMode=story"
    );
    cy.get("#reset-color-mode").click();
  });

  it("displays in light mode correctly", () => {
    const getCloseButtons = () => cy.get("[data-testid=NewDefault] button");
    const _grayA3 = "rgba(0, 37, 73, 0.055)";
    const _grayA4 = "rgba(2, 28, 55, 0.075)";

    // test the normal button
    const normal = getCloseButtons().eq(0);
    normal
      .realHover()
      .wait(200)
      .should("have.css", "background-color", _grayA3);
    normal
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", _grayA4);

    // test the disabled button
    const disabled = getCloseButtons().eq(1);
    disabled
      .realHover()
      .wait(200)
      .should("have.css", "background-color", _grayA3)
      .should("have.css", "opacity", "0.4");
    disabled
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", _grayA4)
      .should("have.css", "opacity", "0.4");
  });

  it("displays in dark mode correctly", () => {
    cy.get("#switch-color-mode").click();

    const getCloseButtons = () => cy.get("[data-testid=NewDefault] button");
    const _grayDarkA3 = "rgba(214, 251, 252, 0.06)";
    const _grayDarkA4 = "rgba(226, 240, 253, 0.082)";

    // test the normal button
    const normal = getCloseButtons().eq(0);
    normal
      .realHover()
      .wait(200)
      .should("have.css", "background-color", _grayDarkA3);
    normal
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", _grayDarkA4);

    // test the disabled button
    const disabled = getCloseButtons().eq(1);
    disabled
      .realHover()
      .wait(200)
      .should("have.css", "background-color", _grayDarkA3)
      .should("have.css", "opacity", "0.4");
    disabled
      .realMouseDown()
      .wait(200)
      .should("have.css", "background-color", _grayDarkA4)
      .should("have.css", "opacity", "0.4");
  });
});
