import React from "react";
import { render, screen } from "util/test-utils";
import {
  Avatar,
  Stack,
  AvatarGroup,
  PropsOf,
  AvatarBadge,
  AvatarBadgeProps,
} from "@chakra-ui/react";
import { randomColor } from "@chakra-ui/theme-tools";

test("avatar with badge", () => {
  const Scene = () => {
    return (
      <Avatar
        size="sm"
        name="Uchiha Itachi"
        src="https://uinames.com/api/photos/female/18.jpg"
        data-testid="avatar"
      >
        <AvatarBadge boxSize="1.25em" bg="green.9" data-testid="avatar-badge" />
      </Avatar>
    );
  };
  render(<Scene />);

  // get dom elements
  const avatar = screen.getByTestId("avatar");
  const avatarBadge = screen.getByTestId("avatar-badge");
  const toggleColorMode = screen.getByTestId("toggle-color-mode");
  const resetColorMode = screen.getByTestId("reset-color-mode");

  // reset the color mode
  resetColorMode.click();

  // test when light mode
  expect(avatar).toHaveStyleRule(
    "background",
    randomColor({ string: "Uchiha Itachi" })
  );
  expect(avatarBadge).toHaveStyleRule(
    "background",
    "var(--chakra-colors-green-9)"
  );
  expect(avatarBadge).toHaveStyleRule(
    "border-color",
    "var(--chakra-colors-_gray-1)"
  );

  // switch to dark mode
  toggleColorMode.click();

  // test when dark mode
  expect(avatar).toHaveStyleRule(
    "background",
    randomColor({ string: "Uchiha Itachi" })
  );
  expect(avatarBadge).toHaveStyleRule(
    "background",
    "var(--chakra-colors-green-9)"
  );
  expect(avatarBadge).toHaveStyleRule(
    "border-color",
    "var(--chakra-colors-_gray-12)"
  );
});

test("avatar with initials", () => {
  const Scene = () => {
    return (
      <Avatar
        name="Segun Adebayo"
        src="https://bit.ly/sage-adebayo"
        h="50px"
        w="50px"
        data-testid="avatar"
      />
    );
  };
  render(<Scene />);

  // get dom elements
  const avatar = screen.getByTestId("avatar");
  const toggleColorMode = screen.getByTestId("toggle-color-mode");
  const resetColorMode = screen.getByTestId("reset-color-mode");

  // reset the color mode
  resetColorMode.click();

  // test when light mode
  expect(avatar).toHaveStyleRule(
    "background",
    randomColor({ string: "Segun Adebayo" })
  );

  // switch to dark mode
  toggleColorMode.click();

  // test when dark mode
  expect(avatar).toHaveStyleRule(
    "background",
    randomColor({ string: "Segun Adebayo" })
  );
});

test("avatar group", () => {
  const Scene = () => {
    return (
      <AvatarGroup size="lg" max={3}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    );
  };
  render(<Scene />);

  // get dom elements
  const avatarExcess = screen.getByText("+1");
  const toggleColorMode = screen.getByTestId("toggle-color-mode");
  const resetColorMode = screen.getByTestId("reset-color-mode");

  // reset the color mode
  resetColorMode.click();

  // test when light mode
  expect(avatarExcess).toHaveStyleRule(
    "background",
    "var(--chakra-colors-_gray-3)"
  );

  // switch to dark mode
  toggleColorMode.click();

  // test when dark mode
  expect(avatarExcess).toHaveStyleRule(
    "background",
    "var(--chakra-colors-_grayDarkA-3)"
  );
});
