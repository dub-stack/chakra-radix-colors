import React from "react";
import { render, screen } from "util/test-utils";
import { Button } from "@chakra-ui/react";

describe("`solid` varaint", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button colorScheme="_gray" variant="solid" data-testid="gray-btn">
            Button
          </Button>
          <Button colorScheme="blue" variant="solid" data-testid="normal-btn">
            Button
          </Button>
          <Button colorScheme="amber" variant="solid" data-testid="bright-btn">
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-btn");
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-4)");
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-6)", {
      target: ":active",
    });
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    // test normal in light mode
    expect(normal).toHaveStyleRule("background", "var(--chakra-colors-blue-9)");
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blue-10)",
      { target: ":active" }
    );
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-9)"
    );
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-10)",
      { target: ":active" }
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    ///////////////////////////////////////////////////////////
    // switch to dark mode
    ///////////////////////////////////////////////////////////
    toggleColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-4)"
    );
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-6)",
      {
        target: ":active",
      }
    );
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // test normal in light mode
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-9)"
    );
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-10)",
      { target: ":active" }
    );
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-9)"
    );
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-10)",
      { target: ":active" }
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");
  });

  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="_grayDark"
            variant="solid"
            data-testid="gray-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const gray = screen.getByTestId("gray-btn");
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-4)"
    );
    expect(gray).toHaveStyleRule(
      "background",
      "var(--chakra-colors-_grayDark-6)",
      {
        target: ":active",
      }
    );
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // test normal in light mode
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-9)"
    );
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blueDark-10)",
      { target: ":active" }
    );
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-9)"
    );
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amberDark-10)",
      { target: ":active" }
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    ///////////////////////////////////////////////////////////
    // switch to dark mode
    ///////////////////////////////////////////////////////////
    toggleColorMode.click();

    // test gray in light mode
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-4)");
    expect(gray).toHaveStyleRule("background", "var(--chakra-colors-_gray-6)", {
      target: ":active",
    });
    expect(gray).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");

    // test normal in light mode
    expect(normal).toHaveStyleRule("background", "var(--chakra-colors-blue-9)");
    expect(normal).toHaveStyleRule(
      "background",
      "var(--chakra-colors-blue-10)",
      { target: ":active" }
    );
    expect(normal).toHaveStyleRule("color", "var(--chakra-colors-_gray-1)");

    // test bright in light mode
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-9)"
    );
    expect(bright).toHaveStyleRule(
      "background",
      "var(--chakra-colors-amber-10)",
      { target: ":active" }
    );
    expect(bright).toHaveStyleRule("color", "var(--chakra-colors-_gray-12)");
  });
});

describe.skip("`outline` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // switch to dark mode
    toggleColorMode.click();
  });
  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // switch to dark mode
    toggleColorMode.click();
  });
});

describe.skip("`ghost` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // switch to dark mode
    toggleColorMode.click();
  });
  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // switch to dark mode
    toggleColorMode.click();
  });
});

describe.skip("`link` variant", () => {
  test("renders correctly with 'Light' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // switch to dark mode
    toggleColorMode.click();
  });
  test("renders correctly with 'Dark' color schemes", () => {
    const Scene = () => {
      return (
        <>
          <Button
            colorScheme="blueDark"
            variant="solid"
            data-testid="normal-btn"
          >
            Button
          </Button>
          <Button
            colorScheme="amberDark"
            variant="solid"
            data-testid="bright-btn"
          >
            Button
          </Button>
        </>
      );
    };
    render(<Scene />);

    // get dom elements
    const normal = screen.getByTestId("normal-btn");
    const bright = screen.getByTestId("bright-btn");
    const toggleColorMode = screen.getByTestId("toggle-color-mode");
    const resetColorMode = screen.getByTestId("reset-color-mode");

    // reset the color mode
    resetColorMode.click();

    // switch to dark mode
    toggleColorMode.click();
  });
});
