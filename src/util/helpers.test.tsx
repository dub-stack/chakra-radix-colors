import {
  getThemedColor,
  useThemedColor,
  getBaseColorPair,
  getColorInfo,
} from "./helpers";
import { theme } from "theme";
import React from "react";
import { Text } from "@chakra-ui/react";
import { render, screen } from "util/test-utils";

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
    ["", "gray", "gr", "lime.", "DarkA.2"].forEach((color) => {
      expect(getThemedColor("light")(color)).toBe(color);
      expect(getThemedColor("dark")(color)).toBe(color);
    });
  });

  test("returns when out-of-range", () => {
    ["mint.0", "lime.13", "skyDark.19"].forEach((color) => {
      expect(getThemedColor("light")(color)).toBe(color);
      expect(getThemedColor("dark")(color)).toBe(color);
    });
  });

  test("returns when not a string passed", () => {
    [undefined, null, 249].forEach((color) => {
      expect(getThemedColor("light")(color as any)).toBe(color);
      expect(getThemedColor("dark")(color as any)).toBe(color);
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

describe("getColorInfo", () => {
  test("gets light color info", () => {
    expect(getColorInfo("red", theme)).toEqual({
      light: "red",
      dark: "redDark",
      isDark: false,
      isBright: false,
      isA: false,
    });
  });

  test("gets dark color info", () => {
    expect(getColorInfo("redDark", theme)).toEqual({
      light: "redDark",
      dark: "red",
      isDark: true,
      isBright: false,
      isA: false,
    });
  });

  test("gets light bright color info", () => {
    expect(getColorInfo("sky", theme)).toEqual({
      light: "sky",
      dark: "skyDark",
      isDark: false,
      isBright: true,
      isA: false,
    });
  });

  test("gets alpha color info", () => {
    expect(getColorInfo("skyDarkA", theme)).toEqual({
      light: "skyDarkA",
      dark: "skyA",
      isDark: true,
      isBright: true,
      isA: true,
    });
  });
});
