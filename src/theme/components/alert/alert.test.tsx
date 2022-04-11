import React from "react";
import { render, screen } from "util/test-utils";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  chakra,
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

describe("`subtle` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          status="success"
          mx="auto"
          alignItems="start"
          data-testid="alert"
        >
          <AlertIcon data-testid="alert-icon" />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const alertIcon = screen.getByTestId("alert-icon");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-green-4)");
    expect(alertIcon).toHaveStyleRule("color", "var(--chakra-colors-green-9)");

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-greenDark-4)"
    );
    expect(alertIcon).toHaveStyleRule(
      "color",
      "var(--chakra-colors-greenDark-9)"
    );
  });
  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          status="success"
          mx="auto"
          alignItems="start"
          colorScheme="greenDark"
          data-testid="alert"
        >
          <AlertIcon data-testid="alert-icon" />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const alertIcon = screen.getByTestId("alert-icon");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-greenDark-4)"
    );
    expect(alertIcon).toHaveStyleRule(
      "color",
      "var(--chakra-colors-greenDark-9)"
    );

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-green-4)");
    expect(alertIcon).toHaveStyleRule("color", "var(--chakra-colors-green-9)");
  });
});

describe("`left-accent` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          variant="left-accent"
          mx="auto"
          alignItems="start"
          data-testid="alert"
        >
          <AlertIcon data-testid="alert-icon" />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const alertIcon = screen.getByTestId("alert-icon");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-blue-4)");
    expect(alertIcon).toHaveStyleRule("color", "var(--chakra-colors-blue-9)");

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-4)"
    );
    expect(alertIcon).toHaveStyleRule(
      "color",
      "var(--chakra-colors-blueDark-9)"
    );
  });
  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          variant="left-accent"
          mx="auto"
          alignItems="start"
          colorScheme="blueDark"
          data-testid="alert"
        >
          <AlertIcon data-testid="alert-icon" />
          <chakra.div flex="1">
            <AlertTitle>Holy Smokes</AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const alertIcon = screen.getByTestId("alert-icon");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-4)"
    );
    expect(alertIcon).toHaveStyleRule(
      "color",
      "var(--chakra-colors-blueDark-9)"
    );

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-blue-4)");
    expect(alertIcon).toHaveStyleRule("color", "var(--chakra-colors-blue-9)");
  });
});

describe("`top-accent` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          variant="top-accent"
          mx="auto"
          alignItems="flex-start"
          pt="3"
          rounded="md"
          data-testid="alert"
        >
          <AlertIcon data-testid="alert-icon" />
          <chakra.div flex="1">
            <AlertTitle display="block" mr="2">
              Holy Smokes
            </AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const alertIcon = screen.getByTestId("alert-icon");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-blue-4)");
    expect(alertIcon).toHaveStyleRule("color", "var(--chakra-colors-blue-9)");

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-4)"
    );
    expect(alertIcon).toHaveStyleRule(
      "color",
      "var(--chakra-colors-blueDark-9)"
    );
  });
  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <Alert
          variant="top-accent"
          mx="auto"
          alignItems="flex-start"
          pt="3"
          rounded="md"
          colorScheme="blueDark"
          data-testid="alert"
        >
          <AlertIcon data-testid="alert-icon" />
          <chakra.div flex="1">
            <AlertTitle display="block" mr="2">
              Holy Smokes
            </AlertTitle>
            <AlertDescription>Something just happened!</AlertDescription>
          </chakra.div>
        </Alert>
      );
    };
    render(<Scene />);

    // get dom elements
    const alert = screen.getByTestId("alert");
    const alertIcon = screen.getByTestId("alert-icon");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test when light mode
    expect(alert).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-4)"
    );
    expect(alertIcon).toHaveStyleRule(
      "color",
      "var(--chakra-colors-blueDark-9)"
    );

    // switch to dark mode
    toggleColorMode.click();

    // test when dark mode
    expect(alert).toHaveStyleRule("background", "var(--chakra-colors-blue-4)");
    expect(alertIcon).toHaveStyleRule("color", "var(--chakra-colors-blue-9)");
  });
});
