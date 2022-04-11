import React from "react";
import { render, screen } from "util/test-utils";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

describe("`solid` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          status="error"
          variant="solid"
          colorScheme="red"
          borderRadius="md"
          data-testid="alert"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-red-9)");
    expect(alert).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-redDark-9)"
    );
    expect(alert).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");
  });

  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          status="error"
          variant="solid"
          colorScheme="redDark"
          borderRadius="md"
          data-testid="alert"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Outdated</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-redDark-9)"
    );
    expect(alert).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-red-9)");
    expect(alert).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");
  });
});
