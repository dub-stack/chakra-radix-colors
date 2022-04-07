import {
  chakraTokensFromPalette,
  getThemedColor,
  useThemedColor,
} from "./helpers";
import React from "react";
import { useColorMode, Button, Text } from "@chakra-ui/react";
import { render, screen } from "util/test-utils";

describe("chakraTokensFromPalette", () => {
  test("returns css-variable-aliased color scale", () => {
    expect(chakraTokensFromPalette("amberDarkA")).toMatchObject({
      1: `var(--chakra-colors-amberDarkA-1)`,
      2: `var(--chakra-colors-amberDarkA-2)`,
      3: `var(--chakra-colors-amberDarkA-3)`,
      4: `var(--chakra-colors-amberDarkA-4)`,
      5: `var(--chakra-colors-amberDarkA-5)`,
      6: `var(--chakra-colors-amberDarkA-6)`,
      7: `var(--chakra-colors-amberDarkA-7)`,
      8: `var(--chakra-colors-amberDarkA-8)`,
      9: `var(--chakra-colors-amberDarkA-9)`,
      10: `var(--chakra-colors-amberDarkA-10)`,
      11: `var(--chakra-colors-amberDarkA-11)`,
      12: `var(--chakra-colors-amberDarkA-12)`,
    });
  });
});

describe("getThemedColor", () => {
  test("works with light colors", () => {
    ["gray", "red", "amber"].forEach((color) => {
      expect(getThemedColor("light")(`${color}.3`)).toBe(`${color}.3`);
      expect(getThemedColor("dark")(`${color}.8`)).toBe(`${color}Dark.8`);
    });
  });

  test("works with dark colors", () => {
    ["gray", "teal", "sky"].forEach((color) => {
      expect(getThemedColor("light")(`${color}Dark.5`)).toBe(`${color}Dark.5`);
      expect(getThemedColor("dark")(`${color}Dark.5`)).toBe(`${color}.5`);
    });
  });

  test("works with alpha colors", () => {
    ["gray", "pink", "purple"].forEach((color) => {
      // light-colored alpha
      expect(getThemedColor("light")(`${color}A.5`)).toBe(`${color}A.5`);
      expect(getThemedColor("dark")(`${color}A.5`)).toBe(`${color}DarkA.5`);

      // dark-colored alpha
      expect(getThemedColor("light")(`${color}DarkA.7`)).toBe(
        `${color}DarkA.7`
      );
      expect(getThemedColor("dark")(`${color}DarkA.2`)).toBe(`${color}A.2`);
    });
  });

  test("returns raw garbage values", () => {
    ["", "gray", "gr", "lime."].forEach((color) => {
      expect(getThemedColor("light")(color)).toBe(color);
      expect(getThemedColor("dark")(color)).toBe(color);
    });
  });
});

describe("useThemedColor", () => {
  test("works when changing color modes", () => {
    const MyReactElement = () => {
      const { toggleColorMode, colorMode } = useColorMode();
      const c = useThemedColor();
      return (
        <>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          <Text as="h1" color={c("tealA.4")} />
        </>
      );
    };

    // render the scene
    const { asFragment } = render(<MyReactElement />);

    // check that the light mode color is rendered
    expect(screen.getByRole("heading")).toHaveStyleRule(
      "color",
      "var(--chakra-colors-tealA-4)"
    );

    // toggle the color mode
    screen.getByRole("button").click();

    // check that the dark mode color is rendered
    expect(screen.getByRole("heading")).toHaveStyleRule(
      "color",
      "var(--chakra-colors-tealDarkA-4)"
    );
  });
});
