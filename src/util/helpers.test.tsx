import {
  chakraTokensFromPalette,
  getThemedColor,
  useThemedColor,
  getBaseColorPair,
  getResolvedColorPair,
} from "./helpers";
import theme from "theme";
import React from "react";
import { useColorMode, Button, Text } from "@chakra-ui/react";
import { render, screen } from "util/test-utils";
import { RadixColorsType } from "theme/foundations/colors";

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
      const c = useThemedColor();
      return <Text as="h1" color={c("tealA.4")} />;
    };

    // render the scene
    const { asFragment } = render(<MyReactElement />);

    // check that the light mode color is rendered
    expect(screen.getByRole("heading")).toHaveStyleRule(
      "color",
      "var(--chakra-colors-tealA-4)"
    );

    // toggle the color mode
    screen.getByTestId("toggle-color-mode").click();

    // check that the dark mode color is rendered
    expect(screen.getByRole("heading")).toHaveStyleRule(
      "color",
      "var(--chakra-colors-tealDarkA-4)"
    );
  });
});

describe("getColorPair ", () => {
  test("works when supplying light colors", () => {
    ["gray", "pink", "amber", "sky"].forEach((color) => {
      expect(getBaseColorPair(color, theme)).toEqual([
        `${color}`,
        `${color}Dark`,
      ]);
    });
  });

  test("works when supplying dark colors", () => {
    ["gray", "pink", "amber", "sky"].forEach((color) => {
      expect(getBaseColorPair(`${color}Dark`, theme)).toEqual([
        `${color}Dark`,
        `${color}`,
      ]);
    });
  });

  test("works when supplying alpha colors", () => {
    ["gray", "pink", "amber", "sky"].forEach((color) => {
      expect(getBaseColorPair(`${color}A`, theme)).toEqual([
        `${color}A`,
        `${color}DarkA`,
      ]);
      expect(getBaseColorPair(`${color}DarkA`, theme)).toEqual([
        `${color}DarkA`,
        `${color}A`,
      ]);
    });
  });

  test("works with garbage values", () => {
    ["", "gr", "lime.", "pink.14"].forEach((color) => {
      expect(getBaseColorPair(color, theme)).toEqual([color, color]);
    });
  });
});

describe("getResolvedColorPair ", () => {
  test("works when supplying light colors", () => {
    ["gray", "pink", "amber", "sky"].forEach((color) => {
      expect(getResolvedColorPair(`${color}.2`, theme)).toEqual([
        theme.colors[color as keyof RadixColorsType][2],
        theme.colors[`${color}Dark` as keyof RadixColorsType][2],
      ]);
    });
  });

  test("works when supplying dark colors", () => {
    ["gray", "pink", "amber", "sky"].forEach((color) => {
      expect(getResolvedColorPair(`${color}Dark.5`, theme)).toEqual([
        theme.colors[`${color}Dark` as keyof RadixColorsType][5],
        theme.colors[color as keyof RadixColorsType][5],
      ]);
    });
  });

  test("works when supplying alpha colors", () => {
    ["gray", "red", "teal", "sky"].forEach((color) => {
      expect(getResolvedColorPair(`${color}A.12`, theme)).toEqual([
        theme.colors[`${color}A` as keyof RadixColorsType][12],
        theme.colors[`${color}DarkA` as keyof RadixColorsType][12],
      ]);
    });
    ["gray", "pink", "amber", "sky"].forEach((color) => {
      expect(getResolvedColorPair(`${color}DarkA.11`, theme)).toEqual([
        theme.colors[`${color}DarkA` as keyof RadixColorsType][11],
        theme.colors[`${color}A` as keyof RadixColorsType][11],
      ]);
    });
  });

  test("works with garbage values", () => {
    ["", "gray", "gr", "lime.", "pink.14"].forEach((color) => {
      expect(getResolvedColorPair(color, theme)).toEqual([color, color]);
    });
  });
});
