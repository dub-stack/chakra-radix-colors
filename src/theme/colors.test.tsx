import React from "react";
import { render, screen } from "util/test-utils";
import {
  render as renderNoTheme,
  screen as screenNoTheme,
} from "@testing-library/react";
import { Box } from "@chakra-ui/react";
import { matchers } from "@emotion/jest";

// add emotion matchers
expect.extend(matchers);

describe("Renders colors from theme", () => {
  // When we pass a color value such as "amberA.5" (or any other color from the
  // ChakraTheme), we should recieve a css-variable created by chakra for the
  // given color.

  test("renders chakra theme css-variable for light colors", () => {
    render(<Box data-testid="color-box" bg="sky.5" />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyleRule("background", "var(--chakra-colors-sky-5)");
  });

  test("renders chakra theme css-variable for light-alpha colors", () => {
    render(<Box data-testid="color-box" bg="amberA.12" />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyleRule("background", "var(--chakra-colors-amberA-12)");
  });

  test("renders chakra theme css-variable for dark colors", () => {
    render(<Box data-testid="color-box" bg="skyDark.1" />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyleRule("background", "var(--chakra-colors-skyDark-1)");
  });

  test("renders chakra theme css-variable for alpha-dark colors", () => {
    render(<Box data-testid="color-box" bg="amberDarkA.1" />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDarkA-1)"
    );
  });
});

describe("Doesn't render colors when not in theme", () => {
  // When we pass a color value such as "grass.5" we should recieve the same string
  // back when the theme lookup fails.
  test("when no theme provided, lookup fails", () => {
    renderNoTheme(<Box data-testid="color-box" bg="grass.5" />);
    const box = screenNoTheme.getByTestId("color-box");
    expect(box).toHaveStyleRule("background", "grass.5");
  });

  // When we don't specify a palette choice (1 - 12) we should recieve the same
  // string value passed back.
  test("when no palette choice, lookup fails", () => {
    render(<Box data-testid="color-box" bg="skyDark" />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyleRule("background", "skyDark");
  });

  // When we exceed the bounds of the color palette (1 - 12) we should recieve the
  // same string value passed back.
  test("when palette choice out-of-bounds, lookup fails", () => {
    render(<Box data-testid="color-box" bg="blue.13" />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyleRule("background", "blue.13");
  });
});
