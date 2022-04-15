import React from "react";
import { Badge } from "@chakra-ui/react";
import { render, screen } from "util/test-utils";
import { getResolvedColorPair } from "../../..";
import theme from "theme";

describe("`solid` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Badge colorScheme="_gray" variant="solid" data-testid="gray-badge">
            Gray
          </Badge>
          <Badge colorScheme="blue" variant="solid" data-testid="normal-badge">
            Gray
          </Badge>
          <Badge colorScheme="amber" variant="solid" data-testid="bright-badge">
            Gray
          </Badge>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-badge");
    const normal = screen.getByTestId("normal-badge");
    const bright = screen.getByTestId("bright-badge");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-9)");
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");
    // test normal in light mode
    expect(normal).toHaveStyleRule("background", "var(--chakra-colors-blue-9)");
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");
    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-9)"
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    // switch to dark mode
    toggleColorMode.click();

    // test gray in dark mode
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-9)"
    );
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_grayDarkA-12)");
    // test normal in dark mode
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-9)"
    );
    expect(normal).toHaveStyleRule(
      "color",
      "var(--chakra-colors-_grayDarkA-12)"
    );
    // test bright in dark mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-9)"
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");
  });

  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Badge
            colorScheme="_grayDark"
            variant="solid"
            data-testid="gray-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-badge"
          >
            Gray
          </Badge>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-badge");
    const normal = screen.getByTestId("normal-badge");
    const bright = screen.getByTestId("bright-badge");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-9)"
    );
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_grayDarkA-12)");
    // test normal in light mode
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-9)"
    );
    expect(normal).toHaveStyleRule(
      "color",
      "var(--chakra-colors-_grayDarkA-12)"
    );
    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-9)"
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    // switch to dark mode
    toggleColorMode.click();

    // test gray in dark mode
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-9)");
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");
    // test normal in dark mode
    expect(normal).toHaveStyleRule("background", "var(--chakra-colors-blue-9)");
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");
    // test bright in dark mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-9)"
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");
  });
});

describe("`subtle` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Badge colorScheme="_gray" variant="subtle" data-testid="gray-badge">
            Gray
          </Badge>
          <Badge colorScheme="blue" variant="subtle" data-testid="normal-badge">
            Gray
          </Badge>
          <Badge
            colorScheme="amber"
            variant="subtle"
            data-testid="bright-badge"
          >
            Gray
          </Badge>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-badge");
    const normal = screen.getByTestId("normal-badge");
    const bright = screen.getByTestId("bright-badge");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-4)");
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_grayA-11)");
    // test normal in light mode
    expect(normal).toHaveStyleRule("background", "var(--chakra-colors-blue-4)");
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_grayA-11)");
    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-4)"
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_grayA-11)");

    // switch to dark mode
    toggleColorMode.click();

    // test gray in dark mode
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-4)"
    );
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_grayDarkA-11)");
    // test normal in dark mode
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-4)"
    );
    expect(normal).toHaveStyleRule(
      "color",
      "var(--chakra-colors-_grayDarkA-11)"
    );
    // test bright in dark mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-4)"
    );
    expect(bright).toHaveStyleRule(
      "color",
      "var(--chakra-colors-_grayDarkA-11)"
    );
  });

  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Badge
            colorScheme="_grayDark"
            variant="subtle"
            data-testid="gray-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="blueDark"
            variant="subtle"
            data-testid="normal-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="amberDark"
            variant="subtle"
            data-testid="bright-badge"
          >
            Gray
          </Badge>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-badge");
    const normal = screen.getByTestId("normal-badge");
    const bright = screen.getByTestId("bright-badge");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-4)"
    );
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_grayDarkA-11)");
    // test normal in light mode
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-4)"
    );
    expect(normal).toHaveStyleRule(
      "color",
      "var(--chakra-colors-_grayDarkA-11)"
    );
    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-4)"
    );
    expect(bright).toHaveStyleRule(
      "color",
      "var(--chakra-colors-_grayDarkA-11)"
    );

    // switch to dark mode
    toggleColorMode.click();

    // test gray in dark mode
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-4)");
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_grayA-11)");
    // test normal in dark mode
    expect(normal).toHaveStyleRule("background", "var(--chakra-colors-blue-4)");
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_grayA-11)");
    // test bright in dark mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-4)"
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_grayA-11)");
  });
});

describe("`outline` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Badge colorScheme="_gray" variant="outline" data-testid="gray-badge">
            Gray
          </Badge>
          <Badge
            colorScheme="blue"
            variant="outline"
            data-testid="normal-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="amber"
            variant="outline"
            data-testid="bright-badge"
          >
            Gray
          </Badge>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-badge");
    const normal = screen.getByTestId("normal-badge");
    const bright = screen.getByTestId("bright-badge");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    const [grayLight, grayDark] = getResolvedColorPair("_gray.9", theme);
    expect(gray).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${grayLight}`
    );
    expect(gray).toHaveStyleRule("color", grayLight);
    // test normal in light mode
    const [normalLight, normalDark] = getResolvedColorPair("blue.9", theme);
    expect(normal).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${normalLight}`
    );
    expect(normal).toHaveStyleRule("color", normalLight);
    // test bright in light mode
    const [brightLight, brightDark] = getResolvedColorPair("amber.9", theme);
    expect(bright).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${brightLight}`
    );
    expect(bright).toHaveStyleRule("color", brightLight);

    // switch to dark mode
    toggleColorMode.click();

    // test gray in dark mode
    expect(gray).toHaveStyleRule("box-shadow", `inset 0 0 0px 1px ${grayDark}`);
    expect(gray).toHaveStyleRule("color", grayDark);
    // test normal in dark mode
    expect(normal).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${normalDark}`
    );
    expect(normal).toHaveStyleRule("color", normalDark);
    // test bright in dark mode
    expect(bright).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${brightDark}`
    );
    expect(bright).toHaveStyleRule("color", brightDark);
  });

  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Badge
            colorScheme="_grayDark"
            variant="outline"
            data-testid="gray-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="blueDark"
            variant="outline"
            data-testid="normal-badge"
          >
            Gray
          </Badge>
          <Badge
            colorScheme="amberDark"
            variant="outline"
            data-testid="bright-badge"
          >
            Gray
          </Badge>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-badge");
    const normal = screen.getByTestId("normal-badge");
    const bright = screen.getByTestId("bright-badge");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    const [grayLight, grayDark] = getResolvedColorPair("_grayDark.9", theme);
    expect(gray).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${grayLight}`
    );
    expect(gray).toHaveStyleRule("color", grayLight);
    // test normal in light mode
    const [normalLight, normalDark] = getResolvedColorPair("blueDark.9", theme);
    expect(normal).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${normalLight}`
    );
    expect(normal).toHaveStyleRule("color", normalLight);
    // test bright in light mode
    const [brightLight, brightDark] = getResolvedColorPair(
      "amberDark.9",
      theme
    );
    expect(bright).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${brightLight}`
    );
    expect(bright).toHaveStyleRule("color", brightLight);

    // switch to dark mode
    toggleColorMode.click();

    // test gray in dark mode
    expect(gray).toHaveStyleRule("box-shadow", `inset 0 0 0px 1px ${grayDark}`);
    expect(gray).toHaveStyleRule("color", grayDark);
    // test normal in dark mode
    expect(normal).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${normalDark}`
    );
    expect(normal).toHaveStyleRule("color", normalDark);
    // test bright in dark mode
    expect(bright).toHaveStyleRule(
      "box-shadow",
      `inset 0 0 0px 1px ${brightDark}`
    );
    expect(bright).toHaveStyleRule("color", brightDark);
  });
});
